import { Text } from "react-native";
import { colors } from "../../../../infastructure/theme/colors";
import { RowView } from "../../../resturants/components/resturant-info/resturant-info.styles";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { SimpleLineIcons } from "@expo/vector-icons";

export const ButtonText = ({textColor, iconName, title}) => {
	return (
		<RowView style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: textColor }}>{title }</Text>
			<Spacer postion={"left"} size="small">
				<SimpleLineIcons name={iconName} color={textColor} />
			</Spacer>
		</RowView>
	);
};
