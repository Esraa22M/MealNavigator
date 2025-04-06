import { Text } from "react-native";
import { AccountBackground } from "../account/account.styles";
const image = {uri:"../../../../../assets/bg-images/wallpaper7.jpg"}
export const LoginScreen = () => {
	return (
		<AccountBackground
			source={image}
		>
			<Text>login screen</Text>
		</AccountBackground>
	);
};
