import { SearchContainer, SearchBar } from "./search.styles";
import { useContext,useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../../services/location/location.context";
export const Search = () => {
	const {  search, setKeyWord } = useContext(LocationContext);
	const [searchTerm, setSearchTerm] = useState("san francisco")
	return (
		<SearchContainer>
			<SearchBar
				style={{ width: "95%" }}
				placeholder="Search for location"
				value={searchTerm}
				onChangeText={(text)=>setSearchTerm(text)}
				onSubmitEditing={()=>search(searchTerm)}
			/>
		</SearchContainer>
	);
};
