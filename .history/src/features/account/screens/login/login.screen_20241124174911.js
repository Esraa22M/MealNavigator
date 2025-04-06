import { Text } from "react-native";
import { AccountBackground } from "../account/account.styles";
export const LoginScreen = () => {
	return (
		<AccountBackground
			source={{ uri: "../../../../../assets/bg-images/wallpaper7.jpg" }}
		>
			<Text>login screen</Text>
		</AccountBackground>
	);
};
