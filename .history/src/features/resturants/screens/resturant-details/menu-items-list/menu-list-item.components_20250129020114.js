import { Text, View } from "react-native";
import { colors } from "../../../../../infastructure/theme/colors";
export const MenuListItem = ({ item }) => {
	return (
		<View style={{ marginHorizontal: 30, backgroundColor:"red" }}>
			<Text style={{ color: colors.ui.accent }}>{item}</Text>
		</View>
	);
};
