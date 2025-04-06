import { Text } from "react-native";
import { useState } from "react";
import { TextInput } from "react-native-paper";
import { colors } from "../../../../infastructure/theme/colors";
import {
	AccountBackground,
	AccountCover,
	AccountContainer,
} from "../account/account.styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { AuthInput } from "../account/account.styles";
import { AuthButton } from "../account/Auth-button.components";
import { useContext } from "react";
import { AuthenticationContext } from "../../../../services/authentication/authentication.context";
export const LoginScreen = () => {
	const [userData, setUserData] = useState({
		email: { value: "", isFocused: false },
		password: { value: "", isFocused: false },
	});
	const handleInputChange = (key, field, value) => {
		console.log(field, value);
		setUserData((prevState) => ({
			...prevState,
			[key]: { ...prevState[key], [field]: value },
		}));
	};
	const {onLogin , error } = useContext(AuthenticationContext);
	console.log(typeof(error))
	return (
		<AccountBackground
			source={require("../../../../../assets/bg-images/wallpaper7.jpg")}
		>
			<AccountContainer>
				<AuthInput
					label={!userData.email.isFocused ? "Email" : ""}
					placeholder="Enter your email"
					value={userData.email.value}
					onFocus={handleInputChange.bind(this, "email", "isFocused", true)}
					onBlur={handleInputChange.bind(this, "email", "isFocused", false)}
					onChangeText={handleInputChange.bind(this, "email", "value")}
					keyboardType="email-address"
					autoCapitalize="none"
					textColor="black"
					textContentType="emailAddress"
				/>
				<Spacer size={"large"} postion={"top"} />
				<AuthInput
					value={userData.password.value}
					autoCapitalize="none"
					onFocus={handleInputChange.bind(this, "password", "isFocused", true)}
					onBlur={handleInputChange.bind(this, "password", "isFocused", false)}
					onChangeText={handleInputChange.bind(this, "password", "value")}
					label={!userData.password.isFocused ? "Password" : ""}
					placeholder="Enter your password"
					secureTextEntry={true}
				/>
				<Spacer size={"large"} postion={"top"} />
				<AuthButton
						title="Login"
						iconName={"account-arrow-right-outline"}
						IconPackage={MaterialCommunityIcons}
						textColor={colors.brand.secondary}
						onPress={onLogin.bind(this,userData.email.value, userData.password.value )}
					/>
			</AccountContainer>
		</AccountBackground>
	);
};
