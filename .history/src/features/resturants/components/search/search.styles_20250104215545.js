import { View } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export const SearchContainer = styled(View)`
	padding-top: ${(props) => props.theme.space[3]};
	padding-bottom: ${(props) => props.theme.space[3]};
	justify-content: center;
	over-flow: hidden;
	align-items: center;
	width: 100%;
`;
export const SearchBar = styled(Searchbar).attrs((props) => ({
	placeholderTextColor: props.theme.colors.brand.primary,
	iconColor:props.theme.colors.ui.accent,
	...props
    
}))`
	background-color: ${(props) => props.theme.colors.brand.secondary};
	border-width: 2.5px;
	border-color: ${(props) => props.theme.colors.ui.primary};
`;
