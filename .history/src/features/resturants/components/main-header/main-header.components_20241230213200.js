import {
	MainHeaderContainer,
	MainHeaderOuterContainer,
	IconWrapper,
	FavouritesWrapper,
} from "./main-header.styles";
import { Ionicons } from "@expo/vector-icons";
import { FavouritesView } from "../favourites/favourites.components";

export const MainHeader = () => {
	return (
		<MainHeaderOuterContainer>
			<MainHeaderContainer>
				<FavouritesWrapper>
					<FavouritesView />
				</FavouritesWrapper>
				<IconWrapper>
					<Ionicons
						name="search-circle-outline"

						color="white"
						size={50}
					/>
				</IconWrapper>
			</MainHeaderContainer>
		</MainHeaderOuterContainer>
	);
};
