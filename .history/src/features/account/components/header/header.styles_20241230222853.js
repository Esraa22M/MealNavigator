import styled from "styled-components/native";
import { View, Text } from "react-native";
import { TextComponent } from "../../../../components/typography/text.components";
export const HeaderContainer = styled(View)`
	padding: 16px;
	flex: 1;
	background-color: rgba(0, 128, 128, 0.1);
	justify-content: space-between;
`;
export const HeaderContent = styled(TextComponent)`
	font-size: 35px;
	margin-horizontal: ${(props) => props.account && props.theme.space[3]};

	color: ${(props) =>
		props.account
			? props.theme.colors.ui.primary
			: props.theme.colors.brand.primary};

	font-family: ${(props) => props.theme.fonts.heading};
`;
export const SubHeadingContent = styled(TextComponent)`
	color: ${(props) => props.theme.colors.brand.primary};
	margin-horizontal: ${(props) => props.account && props.theme.space[3]};

	font-size: 20px;
	font-family: ${(props) => props.theme.fonts.subHeading};
`;
