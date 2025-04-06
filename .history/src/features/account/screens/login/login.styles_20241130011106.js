import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
export const LoginOuterContainer = styled(SafeAreaView)`flex-direction:row`
export const LoginContainer = styled(SafeAreaView)`
	width: 80%;
	background-color: red;
	align-self: center;
    background-color: rgba(100, 100, 70, 0.5);
	paddingVertical: ${(props) => props.theme.space[4]};
	paddingHorizontal:${(props) => props.theme.space[3]};
`;
