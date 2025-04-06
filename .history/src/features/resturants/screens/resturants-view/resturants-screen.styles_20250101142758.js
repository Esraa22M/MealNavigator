import { FlatList, View } from "react-native";
import styled from "styled-components/native";
import { Container } from "../../../../components/utils/safe-area.components";
export const AppWrapper = styled(Container)`
	background-color: ${({ theme }) => theme.colors.bg.primary};
	flex: 1;
`;
export const ListContainer = styled(View)`
	flex: 1;
	border-width: 2.5px;
	border-top-right-radius: 50px;
	border-color: ${({ theme }) => theme.colors.ui.primary};
	border-bottom-width:0px;
	border-left-width:0px;
`;
export const ResturantsList = styled(FlatList).attrs({
	contentContainerStyle: { padding: 16 },
})`
	flex: 1;
`;
