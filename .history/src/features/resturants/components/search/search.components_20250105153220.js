import { SearchContainer, SearchBar } from "./search.styles";
import { useContext, useState } from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../../services/location/location.context";
export const Search = () => {
	const { keyword } = useContext(LocationContext);
	const [searchKeyword, setSearchKeyword] = useState(keyword);
	useEffect(() => {
		setSearchKeyword(keyword);
	}, [keyword]);
	return (
		<SearchContainer>
			<SearchBar
				style={{ width: "95%" }}
				placeholder="Search for location"
				value={searchKeyword}
				onChangeText={(text) => {
					setSearchKeyword(text);
				}}
			/>
		</SearchContainer>
	);
};
