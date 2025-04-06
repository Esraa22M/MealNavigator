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
import { useContext } from "react";
import { LocationContext } from "../../../../services/location/location.context";
import { Search } from "../search/search.components";
export const MainHeader = () => {
		const { keyWord, search, setKeyWord } = useContext(LocationContext);
	
	return (
		<MainHeaderOuterContainer>
			<Spacer postion={"bottom"} size="large" />
			<MainHeaderContainer>
				<FavouritesWrapper>
					<FavouritesView />
				</FavouritesWrapper>

				<IconWrapper style={({ pressed }) => pressed && { opacity: 0.3 }}>
					<Ionicons name="search-outline" color="white" size={30} />
				</IconWrapper>
			</MainHeaderContainer>
			<Spacer postion={"bottom"} size="large" />
			<Spacer postion={"bottom"} size="large" />
			<Searchbar
				onIconPress={() => {
					search(keyWord);
				}}
                icon="map"
				placeholder="Search for location"
				value={keyWord}
				onChangeText={setKeyWord}
			/>
			<HeaderContent variant="body" style={{ fontSize: 28, padding: 16 }}>
				Discover the perfect dish that matches your cravings!
			</HeaderContent>
			<Spacer postion={"bottom"} size="large" />
			<Spacer postion={"bottom"} size="large" />
		</MainHeaderOuterContainer>
	);
};
