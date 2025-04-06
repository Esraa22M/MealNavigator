import { Pressable  , View} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../infastructure/theme/colors";
import Angle from "react-native-vector-icons/FontAwesome";
export const BackButton = () => {
    const navigation = useNavigation();
    const handleNavigationBack = () => navigation.goBack();
	return (
		<Pressable onPress={handleNavigationBack}>
			<View style={{ flexDirection: "row" }}>
				<Angle name="angle-left" color={colors.ui.primary} size={24} />
				<Angle
					name="angle-left"
					color={colors.brand.muted}
					size={24}
					style={{ marginLeft: 10 }}
				/>
			</View>
		</Pressable>
	);
};
