import { Text, View, StyleSheet, Pressable } from "react-native";
import { useState, useCallback } from "react";

import { colors } from "../../../../../infastructure/theme/colors";
import { fonts } from "../../../../../infastructure/theme/fonts";

export const MenuListItem = ({ item, categoryLength, intialState }) => {
	const [activeCategory, setActiveCategory] = useState(intialState);
	
	const handleCategoryNamePress = useCallback(() => {
		setActiveCategory({ categoryName: item });
	}, [item]);

	const isActive = activeCategory.categoryName === item;

	return (
		<Pressable onPress={handleCategoryNamePress}>
			<View style={styles.itemContainer}>
				<Text style={isActive ? styles.activeCategoryName : styles.categoryName}>{item}</Text>
				<View style={[styles.counterContainer, isActive && styles.activeContainer]}>
					<Text style={isActive ? styles.activeCounter : styles.counter}>{categoryLength}</Text>
				</View>
			</View>
		</Pressable>
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
	categoryName: { color: colors.ui.accent, fontFamily: fonts.body },
	activeCategoryName: { color: colors.ui.secondary, fontWeight: "700", fontFamily: fonts.body },
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
	activeCounter: { color: colors.brand.secondary, fontFamily: fonts.body, lineHeight: 15, textAlign: "center" },
	counter: { color: colors.ui.accent, fontFamily: fonts.body },
});
