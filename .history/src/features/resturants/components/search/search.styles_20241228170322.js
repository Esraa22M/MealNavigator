import { View } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
export const SearchContainer = styled(View)`
	padding-top: ${(props) => props.theme.space[3]};
	padding-bottom: ${(props) => props.theme.space[3]};
	flex-direction: row;
	justify-content: center;
	over-flow: hidden;
	align-items: center;
	max-width: 100%;
`;
export const SearchBar = styled(Searchbar)`
	background-color: ${(props) => props.theme.colors.brand.secondary};
	border-width:2px;
	border-color:${(props)=>props.theme.colors.ui.primary}
`;
