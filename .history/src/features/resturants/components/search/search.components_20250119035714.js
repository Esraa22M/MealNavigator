import { SearchContainer, SearchBar } from "./search.styles";
import { useContext,useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { LocationContext } from "../../../../services/location/location.context";
export const Search = () => {
	const {  search } = useContext(LocationContext);
	const [searchTerm, setSearchTerm] = useState("");
	return (
		<SearchContainer>
			<Ionicons name="chevron-back" size={24}/>

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
