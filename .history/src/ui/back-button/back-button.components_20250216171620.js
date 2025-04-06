import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Angle from "react-native-vector-icons/FontAwesome";
export const BackButton = () => {
	return (
		<Pressable>
			<View style={{ flexDirection: "row" }}>
				<Angle name="angle-right" color={colors.brand.secondary} size={24} />
				<Angle
					name="angle-right"
					color={colors.brand.muted}
					size={24}
					style={{ marginLeft: 10 }}
				/>
			</View>
		</Pressable>
	);
};
