import { Text } from "react-native";
import { RowView } from "../../../resturants/components/resturant-info/resturant-info.styles";
import { Spacer } from "../../../../components/spacer/spacer.component";

export const ButtonText = ({textColor, iconName, title , iconPackage}) => {
	return (
		<RowView style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: textColor }}>{title }</Text>
			<Spacer postion={"left"} size="small">
				<iconPackage name={iconName} color={textColor} />
			</Spacer>
		</RowView>
	);
};
