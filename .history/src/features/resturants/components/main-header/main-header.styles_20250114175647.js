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
border-width: 1;
  border-radius: 2;
  border-color: #ddd;
  border-bottom-width: 0;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.8;
  shadow-radius: 2;
  elevation: 1;
  margin-left: 5;
  margin-right: 5;
  margin-top: 10;

`;
