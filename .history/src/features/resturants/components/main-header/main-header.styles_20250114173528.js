import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable, View } from "react-native";
import styled from "styled-components/native";

export const MainHeaderOuterContainer = styled(SafeAreaView)`

`;
export const MainHeaderContainer = styled(View)`
	flex-direction: row;
	justify-content: space-between;
`;
export const FavouritesWrapper = styled(View)`
	/* padding: 20px 10px; */
`;
export const IconWrapper = styled(View)`
	background-color: ${(props) => props.theme.colors.bg.card};
    	/* padding: 20px 10px; */
 
	 border-bottom-right-radius: 25px;
	 border-bottom-left-radius: 10px; 
	border-top-left-radius: 15px; 
	border-top-right-radius: 5px; 
`;
