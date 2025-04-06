import { Text } from "react-native";
import { colors } from "../../../../infastructure/theme/colors";
import { RowView } from "../../../resturants/components/resturant-info/resturant-info.styles";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { SimpleLineIcons } from "@expo/vector-icons";

export const ButtonText = ({textColor, iconName, title}) => {
	return (
		<RowView style={{ justifyContent: "center", alignItems: "center" }}>
			<Text style={{ color: colors.brand.secondary }}>Login</Text>
			<Spacer postion={"left"} size="small">
				<SimpleLineIcons name="login" color={colors.brand.secondary} />
			</Spacer>
		</RowView>
	);
};
