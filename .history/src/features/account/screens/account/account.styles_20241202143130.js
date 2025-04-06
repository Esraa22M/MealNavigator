import styled from "styled-components/native";
import { ImageBackground } from "react-native";
import { TextInput } from "react-native-paper";
import { View } from "react-native";
import AppButton from "../../../../ui/custom-button/custom-button.components";
export const AccountBackground = styled(ImageBackground)`
	flex: 1;
`;
export const Row = styled(View)`
	flex: 1;
	flex-direction: row;
`;
export const AccountCover = styled(View)`
	position: absolute;
	flex: 1;
	background-color: rgba(0, 0, 0, 0.3);
`;
export const HeaderWrapper = styled(View)`
	margin-top: 10%;
	margin-left: 2%;
	width: 55%;
`;

export const ContentWrapper = styled(View)`
	flex: 1;
	align-items: center;
	justify-content: flex-end;
	margin-bottom: 150px;
`;
export const AccountContainer = styled(View)`
	background-color: rgba(100, 100, 70, 0.5);
	width: 95%;
	paddingvertical: ${(props) => props.theme.space[4]};
	paddinghorizontal: ${(props) => props.theme.space[3]};

	margin-top: ${(props) => props.theme.space[2]};
	justify-content: center;
	align-items: center;
`;
export const AuthButtonContainer = styled(AppButton).attrs((props) => ({
	color: props.theme.colors.ui.primary,
	textColor: props.theme.colors.brand.secondary,
}))`
	width: 100%;
	border-raduis:10px;
	paddingvertical: 20px;
`;
export const AuthInput = styled(TextInput).attrs((props) => ({
	underlineColor: props.theme.colors.ui.primary,
	activeUnderlineColor: props.theme.colors.brand.primary,
}))`
	width: 100%;
	height: 60px;
	background-color: ${(props) => props.theme.colors.bg.primary};
`;
