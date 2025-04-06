import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
	flex: 1;
	padding-left: ${(props) => props.theme.space[3]};
	padding-right: ${(props) => props.theme.space[3]};

`;