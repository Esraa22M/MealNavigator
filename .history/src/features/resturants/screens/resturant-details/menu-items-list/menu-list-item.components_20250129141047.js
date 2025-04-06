import { Text, View, StyleSheet } from "react-native";
import { useState } from "react";
import { colors } from "../../../../../infastructure/theme/colors";
import { fonts } from "../../../../../infastructure/theme/fonts";
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
	const categoryNameStyleApplied =
		activeCategory.categoryName === item
			? styles.activeCategoryName
			: styles.categoryName;

	return (
		<View style={styles.itemContainer}>
			<Text style={categoryNameStyleApplied}>{item}</Text>
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
	categoryName: { color: colors.ui.accent , fontFamily:fonts.body},
	activeCategoryName: { color: colors.ui.secondary, fontWeight: "700" , fontFamily:fonts.body},
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
	activeContainer: { backgroundColor: colors.ui.primary, fontFamily:fonts.body },
	activeCounter: { color: colors.brand.secondary , fontFamily:fonts.body, lineHeight:15, textAlign:"center"},
	counter: { color: colors.ui.accent, fontFamily:fonts.body },
});
