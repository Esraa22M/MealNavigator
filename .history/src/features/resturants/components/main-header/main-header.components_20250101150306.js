import {
	MainHeaderContainer,
	MainHeaderOuterContainer,
	IconWrapper,
	FavouritesWrapper,
} from "./main-header.styles";
import { HeaderContent } from "../../../../components/header/header.styles";
import { Ionicons } from "@expo/vector-icons";
import { FavouritesView } from "../favourites/favourites.components";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { Pressable } from "react-native";
export const MainHeader = () => {
	return (
		<MainHeaderOuterContainer>
			<Spacer postion={"bottom"} size="large" />
			<MainHeaderContainer>
				<FavouritesWrapper>
					<FavouritesView />
				</FavouritesWrapper>
				<IconWrapper>
					<Pressable><Ionicons name="search-outline" color="white" size={30} /></Pressable>
				</IconWrapper>
			</MainHeaderContainer>
			<Spacer postion={"bottom"} size="large" />
            <Spacer postion={"bottom"} size="large" />

			<HeaderContent variant="body" style={{fontSize:28, padding:16}}>
				Discover the perfect dish that matches your cravings!
			</HeaderContent>
            <Spacer postion={"bottom"} size="large" />
			<Spacer postion={"bottom"} size="large" />

		</MainHeaderOuterContainer>
	);
};
