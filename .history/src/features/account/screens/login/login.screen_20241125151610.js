import { Text } from "react-native";
import { useState } from "react";
import { TextInput } from "react-native-paper";
import { colors } from "../../../../infastructure/theme/colors";
import {
	AccountBackground,
	AccountCover,
	AccountContainer,
} from "../account/account.styles";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { AuthInput } from "../account/account.styles";
export const LoginScreen = () => {
	const [userData, setUserData] = useState({ email: "", password: "" });
	const [isFocused , setIsFocused]= useState(false)
	handleUserInput = () => {};
	return (
		<AccountBackground
			source={require("../../../../../assets/bg-images/wallpaper7.jpg")}
		>
			<AuthInput
				label="Email"
				placeholder="Enter your email"
				keyboardType="email-address"
				autoCapitalize="none"
				textContentType="emailAddress"
			/>
			<Spacer size={"large"} postion={"top"} />
			<AuthInput
				label={"Password"}
				placeholder="Enter your password"
				secureTextEntry={true}
			/>
		</AccountBackground>
	);
};
