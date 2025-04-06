import { Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../infastructure/theme/colors";
import Angle from "react-native-vector-icons/FontAwesome";
export const BackButton = () => {
	const navigation = useNavigation();
	const handleNavigationBack = () => {
        console.log("esraa")
		navigation.goBack();
	};

	return (
		<Pressable
			onPress={handleNavigationBack}
			style={{
				borderColor: colors.ui.secondary,
                borderWidth:1,
				margin: 10,
				width: 40,
				height: 40,
				justifyContent: "center",
				alignItems: "center",
				borderRadius: 1000,
				position: "absolute",
				top: 50,
				margin: 10,
				width: 40,
				height: 40,
				justifyContent: "center",
			}}
		>
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
