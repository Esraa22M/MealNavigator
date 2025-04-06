import { Text, View, StyleSheet , Pressable} from "react-native";
import { useState } from "react";

import { colors } from "../../../../../infastructure/theme/colors";
import { fonts } from "../../../../../infastructure/theme/fonts";
export const MenuListItem = ({ item, categoryLength, intialState }) => {
	const [activeCategory, setActiveCategory] = useState({ ...intialState });
	const counterContainerAppliedStyle =
		activeCategory.categoryName === item
			? [styles.counterContainer, styles.activeCategoryName]
			: styles.counterContainer;
	const counterStyleApplied =
		activeCategory.categoryName === item
			? styles.activeCounter
			: styles.counter;
	const categoryNameStyleApplied =
		activeCategory.categoryName === item
			? styles.activeCategoryName
			: styles.categoryName;
	const handleCategoryNamePress =(newState)=>{setActiveCategory({...newState})}

	return (
		<Pressable onPress={handleCategoryNamePress.bind(this, { categoryName:item })}><View style={styles.itemContainer}>
			<Text style={categoryNameStyleApplied}>{item}</Text>
			<View style={counterContainerAppliedStyle}>
				<Text style={counterStyleApplied}>{categoryLength}</Text>
			</View>
		</View></Pressable>
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
	activeContainer: { backgroundColor: colors.ui.primary, },
	activeCounter: { color: colors.brand.secondary , fontFamily:fonts.body, lineHeight:15, textAlign:"center"},
	counter: { color: colors.ui.accent, fontFamily:fonts.body },
});
