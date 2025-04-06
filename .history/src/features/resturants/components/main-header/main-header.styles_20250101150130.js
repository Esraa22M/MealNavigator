import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import styled from "styled-components/native";
export const MainHeaderOuterContainer = styled(View)`
	border-width: 2.5px;
	border-bottom-left-radius: 50px;
	border-color: ${({ theme }) => theme.colors.ui.primary};
	border-top-width:0px;
	padding-left:16px;
	border-right-width:0px;

`;
export const MainHeaderContainer = styled(View)`
	flex-direction: row;
	justify-content: space-between;
`;
export const FavouritesWrapper = styled(View)`
	padding: 20px 10px;
`;
export const IconWrapper = styled(View)`
	border-bottom-right-radius: 25px;
	border-bottom-left-radius: 10px;
	border-top-left-radius: 15px;
	border-top-right-radius: 5px;

	padding: 20px 10px;
	background-color: ${({ theme }) => theme.colors.ui.primary};
`;
