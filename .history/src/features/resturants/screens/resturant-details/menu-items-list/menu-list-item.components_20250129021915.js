import { Text, View } from "react-native";
import { colors } from "../../../../../infastructure/theme/colors";
export const MenuListItem = ({ item ,categoryLength}) => {
	return (
		<View style={{ marginHorizontal: 30, padding:10 }}>
			<Text style={{ color: colors.ui.accent }}>{item}</Text>
           <View style={{width:50, height:40, borderRadius:1000}}><Text>{ categoryLength}</Text></View>
		</View>
	);
};
