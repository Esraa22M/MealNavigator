import { AccountBackground } from "../account/account.styles";
import { OuterWrapper, LoginContainer, ImageContainer } from "./login.styles";
import Logo from "../../../../../assets/bg-images/dish-dinner-svgrepo-com.svg";
import { AuthInput } from "../account/account.styles";
import { AuthButton } from "../account/Auth-button.components";
import { KeyboardAwareScrollView } from "@pietile-native-kit/keyboard-aware-scrollview";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useContext } from "react";
import { ErrorMessage } from "./login.styles";
import { TextInput } from "react-native-paper";
import { AuthFormContext } from "../../../../services/authentication/auth-form.context";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../../services/authentication/authentication.context";
import { AuthHeader } from "../../components/header/authentication-header.components";
export const LoginScreen = () => {
	// handleLoginDataChange.bind(
	// 	this,
	// 	"email",
	// 	"isFocused",
	// 	false
	// )

	// onBlur={handleLoginDataChange.bind(
	// 	this,
	// 	"password",
	// 	"isFocused",
	// 	false
	// )}
	const { loginData, handleLoginDataChange, validateInput, isValidLoginData } =
		useContext(AuthFormContext);
	const { onLogin, error } = useContext(AuthenticationContext);
	console.log(isValidLoginData);
	return (
		<AccountBackground
			style={{ justifyContent: "center", alignItems: "center" }}
			source={require("../../../../../assets/bg-images/wallpaper7.jpg")}
		>
			<OuterWrapper>
				<AuthHeader />
				<ImageContainer>
					<Logo />
				</ImageContainer>
				<LoginContainer>
					<KeyboardAwareScrollView style={{ flex: 1 }}>
						<Spacer size={"large"} postion={"top"} />
						<Spacer size={"large"} postion={"top"} />
						<Spacer size={"large"} postion={"top"} />
						<Spacer size={"large"} postion={"top"} />
						<AuthInput
							value={loginData.email.value}
							right={<TextInput.Icon icon="eye" />}

							label={
								loginData.email.isFocused ||
								isValidLoginData.email.isValid ||
								loginData.email.value

									? ""
									: "Email"
							}
							placeholder={"Enter your email"}
							onFocus={() => {
								handleLoginDataChange("email", "isFocused", true);
							}}
							onBlur={() => {
								validateInput("email", loginData.email.value);
								handleLoginDataChange("email", "isFocused", false);
							}}
							onChangeText={handleLoginDataChange.bind(this, "email", "value")}
							keyboardType="email-address"
							autoCapitalize="none"
							textColor="black"
							textContentType="emailAddress"
						/>

						<Spacer size={"large"} postion={"top"} />
						<AuthInput
							value={loginData.password.value}
							autoCapitalize="none"
							onFocus={() => {
								handleLoginDataChange("password", "isFocused", true);
							}}
							right={<TextInput.Icon icon="eye" />}

							onBlur={() => {
								handleLoginDataChange("password", "isFocused", false);
								validateInput("password", loginData.password.value);
							}}
							onChangeText={handleLoginDataChange.bind(
								this,
								"password",
								"value"
							)}
							label={
								loginData.password.isFocused ||
								isValidLoginData.password.isValid ||
								loginData.password.value

									? ""
									: "Password"
							}
							placeholder="Enter your password"
							secureTextEntry={true}
						/>
						<Spacer size={"large"} postion={"top"} />
						{error && (
							<>
								<ErrorMessage variant="error">
									There is no user corresponding to this identifier
								</ErrorMessage>
							</>
						)}
						<Spacer size={"large"} postion={"top"} />
						<AuthButton
							title="Login"
							iconName={"account-arrow-right-outline"}
							IconPackage={MaterialCommunityIcons}
							onPress={onLogin.bind(
								this,
								loginData.email.value,
								loginData.password.value
							)}
						/>
					</KeyboardAwareScrollView>
				</LoginContainer>
			</OuterWrapper>
		</AccountBackground>
	);
};
