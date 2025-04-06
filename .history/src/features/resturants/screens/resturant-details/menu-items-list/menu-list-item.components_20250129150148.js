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
				<Text style={[styles.categoryName, isActive && styles.activeCategoryName]}>{item}</Text>
				<View style={StyleSheet.flatten([styles.counterContainer, isActive ? styles.activeContainer : null])}>
					<Text style={[styles.counter, isActive && styles.activeCounter]}>{categoryLength}</Text>
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
	categoryName: { 
		color: colors.ui.accent, 
		fontFamily: fonts.body 
	},
	activeCategoryName: { 
		color: colors.ui.secondary, 
		fontWeight: "700", 
		fontFamily: fonts.body 
	},
	counterContainer: {
		width: 30,
		height: 30,
		borderRadius: 1000,
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		top: 0,
		right: 0,
		backgroundColor: "transparent", // نضمن إنه شفاف في الوضع العادي
	},
	activeContainer: { 
		backgroundColor: colors.ui.primary, 
	},
	counter: { 
		color: colors.ui.accent, 
		fontFamily: fonts.body 
	},
	activeCounter: { 
		color: colors.brand.secondary, 
		fontFamily: fonts.body, 
		lineHeight: 15, 
		textAlign: "center" 
	},
});
