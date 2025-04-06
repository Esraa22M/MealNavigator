import { SearchContainer, SearchBar } from "./search.styles";
import { useContext } from "react";
import { LocationContext } from "../../../../services/location/location.context";
export const Search = () => {
	const { keyWord, search, setKeyWord } = useContext(LocationContext);
	return (
		<SearchContainer>
			<SearchBar
				onIconPress={() => {
					search(keyWord);
				}}
				style={{ width: "100%" }}
				placeholder="Search for location"
				value={keyWord}
				onChangeText={setKeyWord}
			/>
		</SearchContainer>
	);
};
