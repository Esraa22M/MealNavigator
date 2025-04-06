import { Pressable, Text } from "react-native";
import Cart from "@react-native-vector-icons/Ionicons";
import Angle from "@react-native-vector-icons/FontAwesome";
import { colors } from "../../../../../infastructure/theme/colors";

export const Button = ({ pressHandler }) => {
	return (
		<Pressable>
			<View>
				<View>
                    <Cart name="cart-outline" color={colors.ui.brand.secondary} size={24 } />
				</View>
                <View><Text>Add to cart</Text></View>
                <View></View>
			</View>
		</Pressable>
	);
};
