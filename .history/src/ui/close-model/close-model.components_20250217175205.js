import { Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../infastructure/theme/colors";
import Close from "react-native-vector-icons/AntDesign";
export const BackButton = ({closeHandler}) => {
	return (
		<Pressable
			onPress={closeHandler}
			style={{
				borderColor: colors.ui.secondary,
				borderWidth: 1,
				zIndex: 1000,
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
			<View>
				<Close
					name="close"
					color={colors.brand.muted}
					size={24}
					style={{ marginLeft: 10 }}
				/>
			</View>
		</Pressable>
	);
};
