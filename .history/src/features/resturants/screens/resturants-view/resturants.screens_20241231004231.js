import { useContext } from "react";
import { Pressable } from "react-native";
import { ResturantContext } from "../../../../services/resturants/resturants.context";
import { Container } from "../../../../components/utils/safe-area.components";
import { ListContainer, ResturantsList } from "./resturants-screen.styles";
import { LoadingDataIndicator } from "../../../../ui/loading-data-indicator/loading-data-indicator.components";
import { ResturantInfoCard } from "../../components/resturant-info/resturant-info.components";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { Search } from "../../components/search/search.components";
import { FavouritesBar } from "../../components/favourites/favourites-bar.components";
import { FavouritesContext } from "../../../../services/favourites/favourites.context";
import { MainHeader } from "../../components/main-header/main-header.components";
export const ResturantScreen = ({ navigation }) => {
	const { resturants, isLoading } = useContext(ResturantContext);
	const handleNavigation = (item) => {
		navigation?.navigate("ResturantDetails", {resturant:item});
	};
	const { isToggled,favourites} = useContext(FavouritesContext);
	return (
		<>
			<Container>
				{isLoading && <LoadingDataIndicator />}
				<MainHeader/>
				{/* <Search /> */}
				{isToggled && <FavouritesBar favourites={favourites }handleNavigation={handleNavigation} />}
				<ListContainer>
					<ResturantsList
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
			</Container>
		</>
	);
};
