import { Text } from "react-native";
import { useState } from "react";
import { AccountBackground } from "../account/account.styles";
export const LoginScreen = () => {
	const [userData , setUserData] = useState({email:'', password})
	return (
		<AccountBackground
			source={require("../../../../../assets/bg-images/wallpaper7.jpg")}
		>
			<Text>login screen</Text>
		</AccountBackground>
	);
};
