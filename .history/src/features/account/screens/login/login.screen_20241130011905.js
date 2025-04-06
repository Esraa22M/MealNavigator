import { useState } from "react";
import { colors } from "../../../../infastructure/theme/colors";
import { AccountBackground } from "../account/account.styles";
import { LoginContainer, LoginOuterContainer } from "./login.styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { AuthInput } from "../account/account.styles";
import { AuthButton } from "../account/Auth-button.components";
import { TextComponent } from "../../../../components/typography/text.components";
import { useContext } from "react";
import { Image } from "react-native-svg";
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
	const { onLogin, error } = useContext(AuthenticationContext);
	console.log(error);
	return (
		<AccountBackground
			source={require("../../../../../assets/bg-images/loginCharacter.jpg")}
		>
			<LoginOuterContainer>
				<Image
					source={require("../../../../../assets/bg-images/wallpaper7.jpg")}
					width={30}
				/>
				;
				<LoginContainer>
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
						onFocus={handleInputChange.bind(
							this,
							"password",
							"isFocused",
							true
						)}
						onBlur={handleInputChange.bind(
							this,
							"password",
							"isFocused",
							false
						)}
						onChangeText={handleInputChange.bind(this, "password", "value")}
						label={!userData.password.isFocused ? "Password" : ""}
						placeholder="Enter your password"
						secureTextEntry={true}
					/>
					<Spacer size={"large"} postion={"top"} />
					{error && (
						<TextComponent variant="error">
							There is no user corresponding to this identifier
						</TextComponent>
					)}
					<Spacer size={"large"} postion={"top"} />

					<AuthButton
						title="Login"
						iconName={"account-arrow-right-outline"}
						IconPackage={MaterialCommunityIcons}
						textColor={colors.brand.secondary}
						onPress={onLogin.bind(
							this,
							userData.email.value,
							userData.password.value
						)}
					/>
				</LoginContainer>{" "}
				'
			</LoginOuterContainer>
		</AccountBackground>
	);
};
