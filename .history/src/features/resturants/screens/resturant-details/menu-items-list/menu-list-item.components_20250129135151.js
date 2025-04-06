import { Text, View, StyleSheet } from "react-native";
import { useState } from "react";
import { colors } from "../../../../../infastructure/theme/colors";
export const MenuListItem = ({ item, categoryLength, intialState }) => {
	const[activeCategory, setActiveCategory]= useState({...intialState})

	return (
		<View style={styles.itemContainer}>
			<Text style={styles.categoryName}>{item}</Text>
			<View style={styles.counterContainer}>
				<Text style={styles.counter}>{categoryLength}</Text>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	itemContainer: {
		marginHorizontal: 30,
		padding: 10,
		position: "relative",
		justifyContent: "center",
		height: 80,
	},
	categoryName: { color: colors.ui.accent },
	counterContainer: {
		width: 30,
		height: 30,
		borderRadius: 1000,
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		top: 0,
		right: 0,
	},
	activeContainer:{ backgroundColor: colors.ui.primary
	},
	activeCounter:{color:colors.brand.primary},
	counter: { color: colors.ui.accent },
});
