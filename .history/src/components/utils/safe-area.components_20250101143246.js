import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { ScrollView } from "react-native-gesture-handler";

export const Container = styled(ScrollView)`
	flex: 1;
	padding-left: ${(props) => props.theme.space[3]};
	padding-right: ${(props) => props.theme.space[3]};

`;