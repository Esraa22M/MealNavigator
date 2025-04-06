import { Text, View, StyleSheet } from "react-native";
import { useState } from "react";
import { colors } from "../../../../../infastructure/theme/colors";
export const MenuListItem = ({ item, categoryLength, intialState }) => {
	const [activeCategory, setActiveCategory] = useState({ ...intialState });
	const counterContainerAppliedStyle =
		activeCategory.categoryName === item
			? [styles.activeContainer, styles.counterContainer]
			: styles.counterContainer;
	const counterStyleApplied =
		activeCategory.categoryName === item
			? styles.activeCounter
			: styles.counter;

	return (
		<View style={styles.itemContainer}>
			<Text style={styles.categoryName}>{item}</Text>
			<View style={counterContainerAppliedStyle}>
				<Text style={counterStyleApplied}>{categoryLength}</Text>
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
	activeCategoryName:{color:colors.ui.secondary,fontWeight:"700" },
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
	activeContainer: { backgroundColor: colors.ui.primary },
	activeCounter: { color: colors.brand.secondary },
	counter: { color: colors.ui.accent },
});
