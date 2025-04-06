import { SearchContainer, SearchBar } from "./search.styles";
import { useContext, useLayoutEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../../services/location/location.context";
export const Search = () => {
	const {  search } = useContext(LocationContext);
	const [searchTerm, setSearchTerm] = useState("san francisco");
	useLayoutEffect(() => { search(searchTerm)},[])

	return (
		<SearchContainer>
			<SearchBar
				style={{ width: "95%" }}
				placeholder="Search for location"
				value={searchTerm}
				onChangeText={setSearchTerm}
			/>
		</SearchContainer>
	);
};
