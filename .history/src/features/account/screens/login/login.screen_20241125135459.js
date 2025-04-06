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
export const LoginScreen = () => {
	const [userData, setUserData] = useState({ email: "", password: "" });
	handleUserInput = () => {};
	return (
		<AccountBackground
			source={require("../../../../../assets/bg-images/wallpaper7.jpg")}
		>
				<TextInput
					activeUnderlineColor={colors.brand.primary}
					label="Email"
					placeholder="Enter your email"
					keyboardType="email-address"
					autoCapitalize="none"
					textContentType="emailAddress"
					underlineColor={colors.ui.primary}
					style={{width:'95%' , height:80 , backgroundColor:colors.bg.primary}}
				/>
				<Spacer size={"large"}  postion={"top"}/>
				<TextInput
					activeUnderlineColor={colors.brand.primary}
					label={"Password"}
					placeholder="Enter your password"
					secureTextEntry={true}
					style={{width:'95%' , height:80}}

				/>
		</AccountBackground>
	);
};
