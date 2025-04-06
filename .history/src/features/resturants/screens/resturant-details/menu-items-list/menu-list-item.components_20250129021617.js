import { Text, View } from "react-native";
import { colors } from "../../../../../infastructure/theme/colors";
export const MenuListItem = ({ item ,categoryLength}) => {
	return (
		<View style={{ marginHorizontal: 30, backgroundColor:"red", padding:10 }}>
			<Text style={{ color: colors.ui.accent }}>{item}</Text>
		</View>
	);
};
