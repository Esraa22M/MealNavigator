import {
	MainHeaderContainer,
	MainHeaderOuterContainer,
	IconWrapper,
	FavouritesWrapper,
} from "./main-header.styles";
import Logo from "../../../../../assets/bg-images/dish-dinner-svgrepo-com.svg";
import { useContext } from "react";
import { HeaderContent } from "../../../../components/header/header.styles";
import { FavouritesView } from "../favourites/favourites.components";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { Search } from "../search/search.components";
import { Pressable, View, Text } from "react-native";
import { FavouritesContext } from "../../../../services/favourites/favourites.context";
export const MainHeader = ({ navigation }) => {
	const { favourites, isToggled } = useContext(FavouritesContext);
	return (
		<>
			<MainHeaderContainer>
				<View>
					{/* <FavouritesView
						navigation={navigation}
					/> */}
					<HeaderContent variant="body" style={{ fontSize: 25 }}>
						Meal Navigator
					</HeaderContent>
				</View>

				<View
					style={{
						shadowColor: "#000",
						shadowOffset: { width: 0, height: 2 },
						shadowOpacity: 0.8,
						shadowRadius: 2,
						elevation: 5,
						backgroundColor: "white",
						borderRadius: 10000,
					}}
				>
					{<Logo />}
				</View>
			</MainHeaderContainer>
			<Search />

			{/* <Spacer postion={"bottom"} size="large" /> */}
			{/* <Spacer postion={"bottom"} size="large" /> */}
		</>
	);
};
