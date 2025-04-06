import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
export const LoginOuterContainer = styled(SafeAreaView)`
	flex-direction: row;
	flex: 1;
`;
export const LoginContainer = styled(SafeAreaView)`
	flex: 1;
	margin-horizontal: ${(props) => props.theme.space[3]};
	borderWidth: 1,

	border-raduis:100px;
	background-color: red;
	justify-content: center;
	align-self: center;
	background-color: rgba(100, 100, 70, 0.5);
	padding-vertical: ${(props) => props.theme.space[4]};
	padding-horizontal: ${(props) => props.theme.space[3]};
`;
export const ImageContainer = styled(View)`
	width: 20%;
	align-self: center;
`;
