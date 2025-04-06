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
/* elevation:5; */
/* shadow-color:grey; */
/* shadow-opacity:0.25; */
/* shadow-radius:3.84px; */
	/* padding: 20px 10px; */
`;
export const IconWrapper = styled(View)`
 elevation:5px;
shadow-color:'#171717';
shadow-opacity:0.2px;
/* shadow-offset:{width:-2px , height:4px}; */
shadow-radius:3px;
`;
