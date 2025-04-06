import { Text, View, StyleSheet } from "react-native";
import { colors } from "../../../../../infastructure/theme/colors";
export const MenuListItem = ({ item, categoryLength ,intialState}) => {
	return (
		<View
			style={styles.itemContainer}
		>
			<Text style={{ color: colors.ui.accent }}>{item}</Text>
			<View
				style={{
					width: 30,
					height: 30,
					borderRadius: 1000,
					// backgroundColor: colors.ui.primary,
					justifyContent: "center",
					alignItems: "center",
					position: "absolute",
					top: 0,
                    right:0
				}}
			>
				<Text style={{ color: colors.ui.accent }}>{categoryLength}</Text>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({itemContainer:{
	marginHorizontal: 30,
	padding: 10,
	position: "relative",
	justifyContent:"center",
	height:80,

	
}});