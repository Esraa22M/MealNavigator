import { Text } from "react-native";
import { RowView } from "../../../resturants/components/resturant-info/resturant-info.styles";
import { Spacer } from "../../../../components/spacer/spacer.component";

export const ButtonText = ({textColor, iconName, title , IconPackage}) => {
	return (
		<RowView style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: textColor }}>{title }</Text>
			<Spacer postion={"left"} size="small">
                <IconPackage name={iconName} color={textColor} size={ 15} />
			</Spacer>
		</RowView>
	);
};
