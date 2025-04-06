import {
	MainHeaderContainer,
	MainHeaderOuterContainer,
	IconWrapper,
	FavouritesWrapper,
} from "./main-header.styles";
import { Ionicons } from "@expo/vector-icons";
import { FavouritesView } from "../favourites/favourites.components";
import { Spacer } from "../../../../components/spacer/spacer.component";
export const MainHeader = () => {
	return (
		<MainHeaderOuterContainer>
			<MainHeaderContainer>
				<FavouritesWrapper>
					<FavouritesView />
				</FavouritesWrapper>
				<IconWrapper>
					<Ionicons
						name="search-outline"
						color="white"
						size={30}
					/>
				</IconWrapper>
			</MainHeaderContainer>
            <Spacer postion={"bottom"} size="large"/>
		</MainHeaderOuterContainer>
	);
};
