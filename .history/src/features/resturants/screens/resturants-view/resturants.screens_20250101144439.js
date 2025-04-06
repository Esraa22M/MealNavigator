import { useContext } from "react";
import { Pressable, ScrollView } from "react-native";
import { ResturantContext } from "../../../../services/resturants/resturants.context";
import {
	ListContainer,
	ResturantsList,
	AppWrapper,
} from "./resturants-screen.styles";
import { LoadingDataIndicator } from "../../../../ui/loading-data-indicator/loading-data-indicator.components";
import { ResturantInfoCard } from "../../components/resturant-info/resturant-info.components";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { FavouritesBar } from "../../components/favourites/favourites-bar.components";
import { FavouritesContext } from "../../../../services/favourites/favourites.context";
import { MainHeader } from "../../components/main-header/main-header.components";
export const ResturantScreen = ({ navigation }) => {
	const { resturants, isLoading } = useContext(ResturantContext);
	const handleNavigation = (item) => {
		navigation?.navigate("ResturantDetails", { resturant: item });
	};
	const { isToggled, favourites } = useContext(FavouritesContext);
	return (
		<>
			<AppWrapper>
				<ListContainer>
					<ResturantsList
						ListHeaderComponent={() => (
							<>
								{isLoading && <LoadingDataIndicator />}
								<MainHeader/>
								{isToggled && (
									<FavouritesBar
										favourites={favourites}
										handleNavigation={handleNavigation}
									/>
								)}
								<Spacer postion={"bottom"} size="large" />
							</>
						)}
						data={resturants}
						renderItem={(dataItem) => {
							return (
								<Pressable onPress={handleNavigation.bind(this, dataItem.item)}>
									<Spacer postion={"bottom"} size="large">
										<ResturantInfoCard resturant={dataItem.item} />
									</Spacer>
								</Pressable>
							);
						}}
						keyExtractor={(item) => item.name}
					/>
				</ListContainer>
			</AppWrapper>
		</>
	);
};
