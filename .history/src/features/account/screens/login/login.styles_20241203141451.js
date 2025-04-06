import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAvoidingView } from "react-native";

import { View } from "react-native";
export const LoginOuterContainer = styled(SafeAreaView)`
	flex-direction: row;
	flex: 1;
`;
export const LoginContainer = styled(View)`
	postion: absolute;
	top:30%;
	z-index: 100;
	flex: 1;
	margin-horizontal: ${(props) => props.theme.space[3]};
	border-top-left-radius: 25px;
	border-top-right-radius: 25px;
	border-width: 3px;
	border-color: ${(props) => props.theme.colors.bg.main};
	background-color: red;
	/* background-color: rgba(90, 90, 90, 0.6); */
	padding-vertical: ${(props) => props.theme.space[4]};
	padding-horizontal: ${(props) => props.theme.space[3]};
`;
export const ImageContainer = styled(View)`
	justify-content:center;
	align-items:center;
	height:100px;
	background-color:red;
`;
export const OuterWrapper = styled(SafeAreaView)`
	flex: 1;
`;
