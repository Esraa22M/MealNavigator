import { Pressable, Text, StyleSheet, View } from "react-native";
// import Cart from "@react-native-vector-icons/Ionicons";
import Angle from "react-native-vector-icons/FontAwesome";
import { colors } from "../../../../../infastructure/theme/colors";
import { fonts } from "../../../../../infastructure/theme/fonts";
import Ionicons from "react-native-vector-icons/Ionicons";


export const Button = ({ pressHandler }) => {
	return (
		<Pressable style={styles.outerWrapper}>
			<View style={{flexDirection:"row", width:"100%", justifyContent:"space-between"}}> 
				<View>
					<Ionicons name="cart-outline" color={colors.brand.secondary} size={24} />
				</View>
				<View>
					<Text style={styles.title}>Add to cart</Text>
				</View>
				<View style={{flexDirection:"row"}}>
					<Angle name="angle-right" color={colors.brand.secondary} size={24} />
					<Angle name="angle-right" color={colors.brand.accent} size={24} />
				</View>
			</View>
		</Pressable>
	);
};
const styles = StyleSheet.create({
	outerWrapper: {
		backgroundColor: colors.brand.primary,
		width: "100%",
		borderRadius: 20,
		paddingVertical: 10,
		backgroundColor: colors.brand.primary,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
	},
	title: { color: colors.brand.secondary, fontFamily: fonts.body },
});
