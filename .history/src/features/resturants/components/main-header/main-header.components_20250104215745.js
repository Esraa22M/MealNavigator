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
import { useState } from "react";
import { Search } from "../search/search.components";
export const MainHeader = () => {
	const [showSearch, setShowSearch] = useState(false);
	return (
		<MainHeaderOuterContainer>
			<Spacer postion={"bottom"} size="large" />
			<MainHeaderContainer>
				<FavouritesWrapper>
					<FavouritesView />
				</FavouritesWrapper>
				{!showSearch ? (
					<IconWrapper
						style={({ pressed }) => pressed && { opacity: 0.3 }}
						onPress={() => setShowSearch(false)}
					>
						<Ionicons name="search-outline" color="white" size={30} />
					</IconWrapper>
				) : (
					<></>
				)}
			</MainHeaderContainer>
			<Spacer postion={"bottom"} size="large" />
			{showSearch ? (
					<Search/>
				) : (
					<></>
				)}
			<Spacer postion={"bottom"} size="large" />

			<HeaderContent variant="body" style={{ fontSize: 28, padding: 16 }}>
				Discover the perfect dish that matches your cravings!
			</HeaderContent>
			<Spacer postion={"bottom"} size="large" />
			<Spacer postion={"bottom"} size="large" />
		</MainHeaderOuterContainer>
	);
};
