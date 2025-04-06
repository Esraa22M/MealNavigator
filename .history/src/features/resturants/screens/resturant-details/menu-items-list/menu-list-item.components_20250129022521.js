import { Text, View } from "react-native";
import { colors } from "../../../../../infastructure/theme/colors";
export const MenuListItem = ({ item, categoryLength }) => {
	return (
		<View style={{ marginHorizontal: 30, padding: 10 , position:'relative'}}>
			<Text style={{ color: colors.ui.accent }}>{item}</Text>
			<View
				style={{
					width: 30,
					height: 30,
					borderRadius: 1000,
					backgroundColor: colors.ui.primary,
					justifyContent: "center",
					alignItems: "center",
                    position:'absolute',
                    top:-20
				}}
			>
				<Text style={{ color: colors.brand.secondary }}>{categoryLength}</Text>
			</View>
		</View>
	);
};
