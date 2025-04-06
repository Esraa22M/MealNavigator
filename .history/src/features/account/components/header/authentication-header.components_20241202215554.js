import { SubHeadingContent } from "./header.styles";
import { HeaderContent } from "./header.styles";
import { View } from "react-native";

export const AuthHeader = () => {
	return (
		<View style={{ margin: 50 }}>
			<HeaderContent variant="body">Meal Navigator</HeaderContent>

			<SubHeadingContent variant="body">
				One cannot think well, love well, sleep well, if one has not dined well.
			</SubHeadingContent>
		</View>
	);
};
