import { Text } from "react-native";
import { useState } from "react";
import { TextInput } from "react-native-paper";
import { colors } from "../../../../infastructure/theme/colors";
import {
	AccountBackground,
	AccountCover,
	AccountContainer,
} from "../account/account.styles";

export const LoginScreen = () => {
	const [userData, setUserData] = useState({ email: "", password: "" });
	handleUserInput = () => {};
	return (
		<AccountBackground
			source={require("../../../../../assets/bg-images/wallpaper7.jpg")}
		>
			<AccountCover />
			<AccountContainer>
				<TextInput
					activeUnderlineColor={colors.brand.primary}
					label="Email"
					placeholder="Enter your email"
					keyboardType="email-address"
					autoCapitalize="none"
					textContentType="emailAddress"
				/>
			</AccountContainer>
		</AccountBackground>
	);
};
