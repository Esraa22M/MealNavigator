import { Pressable, Text } from "react-native";
import Icon from "@react-native-vector-icons/Ionicons";
import { colors } from "../../../../../infastructure/theme/colors";

export const Button = ({ pressHandler }) => {
	return (
		<Pressable>
			<View>
				<View>
                    <Icon name="cart-outline" color={colors.ui.brand.secondary } />

				</View>
			</View>
		</Pressable>
	);
};
