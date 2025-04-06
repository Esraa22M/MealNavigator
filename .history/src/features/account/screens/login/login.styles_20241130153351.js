import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
export const LoginOuterContainer = styled(SafeAreaView)`
	flex-direction: row;
	background-color: red;
	flex: 1;
`;
export const LoginContainer = styled(SafeAreaView)`
	width: 80%;
	background-color: red;
	align-self: center;
	background-color: rgba(100, 100, 70, 0.5);
	padding-vertical: ${(props) => props.theme.space[4]};
	padding-horizontal: ${(props) => props.theme.space[3]};
`;
export const ImageContainer = styled(View)`width:20%`