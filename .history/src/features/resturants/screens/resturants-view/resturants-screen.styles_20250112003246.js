import { FlatList, View } from "react-native";
import styled from "styled-components/native";
import { Container } from "../../../../components/utils/safe-area.components";
export const AppWrapper = styled(Container)`
	background-color: ${({ theme }) => theme.colors.bg.primary};
	width:100%;
	border-width:1px;
	border-color:'red';

`;
export const ListContainer = styled(View)`
width:100%;

`;
export const ResturantsList = styled(FlatList).attrs({
	contentContainerStyle: { padding: 16 },
})`
width:100%;
`;
