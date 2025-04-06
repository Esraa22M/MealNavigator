import { SearchContainer } from "./search.styles";
import { useContext } from "react";
import { Searchbar } from "react-native-paper";
import { FavouritesView } from "../favourites/favourites.components";
import { LocationContext } from "../../../../services/location/location.context";
export const Search = () => {
	const { keyWord, search, setKeyWord } = useContext(LocationContext);
	return (
		<SearchContainer>
			<FavouritesView/>
			<Searchbar
				onIconPress={() => {
					search(keyWord);
				}}
				style={{width:'90%'}}
				placeholder="Search for location"
				value={keyWord}
				onChangeText={setKeyWord}
			/>
		</SearchContainer>
	);
};
