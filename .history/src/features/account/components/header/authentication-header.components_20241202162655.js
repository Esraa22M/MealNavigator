import {
	SubHeadingContent,
} from "./header.styles";
import { View } from "react-native";

export const AuthHeader = () => {
	return (
		<View style={{margin:50}}>
			<SubHeadingContent variant="body">
				One cannot think well, love well, sleep well, if one has not dined well.
			</SubHeadingContent>
		</View>
	);
};
