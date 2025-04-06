import {  View } from "react-native";
import styled from "styled-components/native";
export const SearchContainer = styled(View)`
	padding-top: ${(props) => props.theme.space[3]};
	padding-bottom: ${(props) => props.theme.space[3]};
	flex-direction:row;
	justify-content:center;
	over-flow:hidden;
	align-items:center;
	max-width: 100%;

`;