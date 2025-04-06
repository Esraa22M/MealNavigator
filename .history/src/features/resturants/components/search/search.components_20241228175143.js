import { SearchContainer, SearchBar } from "./search.styles";
import { useContext } from "react";
import { FavouritesView } from "../favourites/favourites.components";
import { LocationContext } from "../../../../services/location/location.context";
export const Search = () => {
	const { keyWord, search, setKeyWord } = useContext(LocationContext);
	return (
		<SearchContainer>
			<FavouritesView />
			<SearchBar
				onIconPress={() => {
					search(keyWord);
				}}
				style={{ width: "90%" }}
				placeholder="Search for location"
				value={keyWord}
				onChangeText={setKeyWord}
			/>
		</SearchContainer>
	);
};
