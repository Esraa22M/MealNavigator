import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import styled from "styled-components/native";
export const MainHeaderOuterContainer = styled(View)``;
export const MainHeaderContainer = styled(View)`
	flex-direction: row;
	justify-content: space-between;
`;
export const FavouritesWrapper = styled(View)`
	padding: 20px;
`;
export const IconWrapper = styled(View)`
border-bottom-right-radius: 25px;

	padding: 20px;
	background-color: ${({ theme }) => theme.colors.ui.primary};
`;
