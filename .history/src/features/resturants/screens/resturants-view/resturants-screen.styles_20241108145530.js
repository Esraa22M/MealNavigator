import { FlatList, View } from "react-native";
import styled from "styled-components/native";

export const ListContainer = styled(View)`
	flex: 1;
`;
export const ResturantsList = styled(FlatList).attrs({
    contentContainerStyle: {padding:16},
  })`
  `;
