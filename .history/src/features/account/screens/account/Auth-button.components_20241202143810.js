import { Text } from "react-native";
import { RowView } from "../../../resturants/components/resturant-info/resturant-info.styles";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { AuthButtonContainer } from "./account.styles";
export const AuthButton = ({
	textColor,
	iconName,
	title,
	IconPackage,
	onPress,
}) => {
	return (
		<AuthButtonContainer onPress={onPress}>
			<RowView style={{ justifyContent: "center", alignItems: "center" }}>
				<Text style={{ color: textColor }}>{title}</Text>
				<Spacer postion={"left"} size="small">
					<IconPackage name={iconName} color={textColor} size={20} />
				</Spacer>
			</RowView>
		</AuthButtonContainer>
	);
};
