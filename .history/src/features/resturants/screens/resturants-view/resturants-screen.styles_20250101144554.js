import { FlatList, View } from "react-native";
import styled from "styled-components/native";
import { Container } from "../../../../components/utils/safe-area.components";
export const AppWrapper = styled(Container)`
	background-color: ${({ theme }) => theme.colors.bg.primary};
	flex: 1;
`;
export const ListContainer = styled(View)`
	flex: 1;

`;
export const ResturantsList = styled(FlatList).attrs({
	contentContainerStyle: { padding: 16 },
})`
	flex: 1;
`;
