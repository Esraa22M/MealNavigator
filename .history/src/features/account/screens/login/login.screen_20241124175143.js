import { Text } from "react-native";
import { AccountBackground } from "../account/account.styles";
import image from "../../../../../assets/bg-images/wallpaper7.jpg";
export const LoginScreen = () => {
	return (
		<AccountBackground
			source={{ uri: image}}
		>
			<Text>login screen</Text>
		</AccountBackground>
	);
};
