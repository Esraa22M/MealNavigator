import {
	MainHeaderContainer,
	MainHeaderOuterContainer,
	IconWrapper,
	FavouritesWrapper,
} from "./main-header.styles";
//import Logo from "../../../../../assets/bg-images/dish-dinner-svgrepo-com.svg";
import Logo from "../../../../../assets/bg-images/dish-dinner-svgrepo-com.svg";

import { HeaderContent } from "../../../../components/header/header.styles";
import { FavouritesView } from "../favourites/favourites.components";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { Search } from "../search/search.components";
import { Pressable, View , Text} from "react-native";
export const MainHeader = () => {
	return (
		<>
			<View style={{flexDirection:'row', justifyContent:'space-between'}}>
				<FavouritesView />

				<Pressable style={({ pressed }) => pressed && { opacity: 0.3 }}>
					<Text>esraa</Text>
					{ <Logo /> }
				</Pressable>
			</View>
			<Search />

			{/* <Spacer postion={"bottom"} size="large" /> */}
			{/* <Spacer postion={"bottom"} size="large" /> */}
		</>
	);
};
