import {
	MainHeaderContainer,
	MainHeaderOuterContainer,
    IconWrapper
} from "./main-header.styles";
import { Ionicons } from "@expo/vector-icons";
import { FavouritesView } from "../favourites/favourites.components";

export const MainHeader = () => {
	return (
		<MainHeaderOuterContainer>
			<MainHeaderContainer>
				<IconWrapper>
<FavouritesView/>
					<Ionicons
						name="search-circle-sharp"
                        color="white"
                        size={50}
					/>
				</IconWrapper>
			</MainHeaderContainer>
		</MainHeaderOuterContainer>
	);
};
