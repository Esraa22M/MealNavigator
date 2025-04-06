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
	const [userData, setUserData] = useState({
		email: { value: "", isFocused: false },
		password: { value: "", isFocused: false },
	});
	handleInputChange = (key, field, value) => {
		setUserData((prevState) => ({
			...prevState,
			[key]: { ...prevState[key], [field]: value },
		}));
	};
	return (
		<AccountBackground
			source={require("../../../../../assets/bg-images/wallpaper7.jpg")}
		>
			<AccountContainer></AccountContainer>
			<AuthInput
				label={!userData.email.isFocused ? "Email" : ""}
				placeholder="Enter your email"
				value={userData.email.value}
				onFocus={handleInputChange.bind("email", "isFocused", true)}
				onBlur={handleInputChange.bind("email", "isFocused", false)}

				keyboardType="email-address"
				autoCapitalize="none"
				textContentType="emailAddress"
			/>
			<Spacer size={"large"} postion={"top"} />
			<AuthInput
				onFocus={setIsFocused.bind(this, true)}
				onBlur={setIsFocused.bind(this, false)}
				value={userData.password.value}
				label={!userData.password.isFocused ? "Password" : ""}
				placeholder="Enter your password"
				secureTextEntry={true}
			/>
		</AccountBackground>
	);
};
