import { AccountBackground } from "../../screens/account/account.styles";
import {
	OuterWrapper,
	LoginContainer,
	ImageContainer,
	ErrorMessage,
} from "./auth.styles";
import Logo from "../../../../../assets/bg-images/dish-dinner-svgrepo-com.svg";
import { AuthButton } from "../../screens/account/Auth-button.components";
import { KeyboardAwareScrollView } from "@pietile-native-kit/keyboard-aware-scrollview";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { ActivityIndicator } from "react-native-paper";
import { AuthInputComponent } from "./auth-input.components";
import { login } from "../../../../services/authentication/authentication.service";
import { AuthFormContext } from "../../../../services/authentication/auth-form.context";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../../services/authentication/authentication.context";
import { AuthHeader } from "../../components/header/authentication-header.components";
export const AuthForm = ({ isLogin, mode }) => {
	const { loginData, handleLoginDataChange, validateInput, isValidLoginData } =
		useContext(AuthFormContext);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const { authenticate } = useContext(AuthenticationContext);
	const loginHandler = async (email, password) => {
		try {
			setIsLoading(true);
			const token = await login(email.trim(), password.trim());
			authenticate(token);
			setIsLoading(false);
		} catch (err) {
			setError(err.toString());
		}
	};
	console.log(isLogin, "i dont know why");
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
						{!isLogin && <Spacer size={"large"} postion={"top"} />}
						{!isLogin && (
							<AuthInputComponent
								label="First Name"
								loginData={loginData}
								validateInput={validateInput}
								isValidLoginData={isValidLoginData}
								handleLoginDataChange={handleLoginDataChange}
							/>
						)}
						{!isLogin && <Spacer size={"large"} postion={"top"} />}
						{!isLogin && (
							<AuthInputComponent
								label="Last Name"
								loginData={loginData}
								validateInput={validateInput}
								isValidLoginData={isValidLoginData}
								handleLoginDataChange={handleLoginDataChange}
							/>
						)}
						<AuthInputComponent
							label="email"
							loginData={loginData}
							handleLoginDataChange={handleLoginDataChange}
							validateInput={validateInput}
							isValidLoginData={isValidLoginData}
							keyboardType="email-address"
							textContentType="emailAddress"
						/>

						<Spacer size={"large"} postion={"top"} />
						<AuthInputComponent
							label="password"
							loginData={loginData}
							validateInput={validateInput}
							isValidLoginData={isValidLoginData}
							handleLoginDataChange={handleLoginDataChange}
							secureTextEntry={true}
						/>
						{!isLogin && <Spacer size={"large"} postion={"top"} />}
						{!isLogin && (
							<AuthInputComponent
								label="repeat password"
								loginData={loginData}
								validateInput={validateInput}
								isValidLoginData={isValidLoginData}
								handleLoginDataChange={handleLoginDataChange}
								secureTextEntry={true}
							/>
						)}
						<Spacer size={"large"} postion={"top"} />
						{isLoading && <ActivityIndicator animating={true} />}
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
							onPress={() =>
								loginHandler(loginData.email.value, loginData.password.value)
							}
						/>
					</KeyboardAwareScrollView>
				</LoginContainer>
			</OuterWrapper>
		</AccountBackground>
	);
};
