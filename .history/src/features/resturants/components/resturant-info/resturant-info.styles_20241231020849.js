import { View } from "react-native";
import { Card } from "react-native-paper";
import { Image } from "react-native";
import styled from "styled-components/native";
import { TextComponent } from "../../../../components/typography/text.components";
export const ResturantCard = styled(Card)`
	background-color: ${(props) => props.theme.colors.bg.main};
	align-items: center;
	justify-content: center;
	height:500px;
	border-color: ${(props) => props.theme.colors.ui.primary};
	border-width:0.5px;
	padding: ${(props) => props.theme.space[3]};
`;
export const ResturantCardCover = styled(Card.Cover)`
	background-color: ${(props) => props.theme.colors.bg.primary};
	width: ${(props) => props.theme.sizes[6]};
	height: ${(props) => props.theme.sizes[6]};
	border-radius: 1000px;
	over-flow: "hidden";
	border-width: ${(props) => props.theme.sizes[0]};
	border-color: white;
`;
export const CardBody = styled(View)`
	justify-content: center;
	align-items: center;
`;
export const RatingContainer = styled(View)`
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding-top: ${(props) => props.theme.space[2]};
	padding-bottom: ${(props) => props.theme.space[2]};
`;
export const Title = styled(TextComponent)`
	text-align: center;
	text-transform: capitalize;
	padding: 0px ${(props) => props.theme.space[3]};
`;
export const Address = styled(TextComponent)`
	font-family: ${(props) => props.theme.fonts.body};
	text-align: center;
	font-size: ${(props) => props.theme.fontSizes.caption};
`;
export const RowView = styled(View)`
	flex-direction: row;
`;
export const IconsContainerView = styled(View)`
	flex-direction: row;
	justify-content: space-between;
`;
export const Icon = styled(Image)`
	width: 25px;
	height: 25px;
`;
