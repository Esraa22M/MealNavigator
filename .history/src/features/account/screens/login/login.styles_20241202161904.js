import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
export const LoginOuterContainer = styled(SafeAreaView)`
	flex-direction: row;
	flex: 1;
`;
export const LoginContainer = styled(SafeAreaView)`
postion:absolute,
top:30%;
	flex: 1;
	margin: ${(props) => props.theme.space[3]};
	background-color: red;
	background-color: rgba(90, 90, 90, 0.6);
	padding-vertical: ${(props) => props.theme.space[4]};
	padding-horizontal: ${(props) => props.theme.space[3]};
`;
export const ImageContainer = styled(View)`
	width: 20%;
	align-self: center;
`;
export const OuterWrapper = styled(SafeAreaView)`
	flex: 1;
	background-color: ${(props) => props.theme.colors.bg.main};
`;
