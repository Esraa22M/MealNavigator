import { AccountBackground } from "../account/account.styles";
import { OuterWrapper, LoginContainer, ImageContainer } from "./login.styles";
import Logo from "../../../../../assets/bg-images/dish-dinner-svgrepo-com.svg";
import { AuthInput } from "../account/account.styles";
import { AuthButton } from "../account/Auth-button.components";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { KeyboardAvoidingView, ScrollView } from "react-native";
import { AuthHeader } from "../../components/header/authentication-header.components";
export const LoginScreen = () => {
	return (
		<AccountBackground
			source={require("../../../../../assets/bg-images/wallpaper7.jpg")}
		>
			<OuterWrapper>
				<AuthHeader />
				<KeyboardAvoidingView
					behavior={Platform.OS === "ios" ? "padding" : null}
					style={{ flex: 1 }}
					keyboardVerticalOffset={80} // Offset to prevent overlapping (adjust as needed)

				>
					<LoginContainer>
						<ImageContainer>
							<Logo style={{ width: 100, height: 100 }} />
						</ImageContainer>
						<Spacer size={"large"} postion={"top"} />

						<AuthInput
							// label={!userData.email.isFocused ? "Email" : ""}
							placeholder="Enter your email"
							// value={userData.email.value}
							// onFocus={handleInputChange.bind(this, "email", "isFocused", true)}
							// onBlur={handleInputChange.bind(this, "email", "isFocused", false)}
							// onChangeText={handleInputChange.bind(this, "email", "value")}
							keyboardType="email-address"
							autoCapitalize="none"
							textColor="black"
							textContentType="emailAddress"
						/>
						<Spacer size={"large"} postion={"top"} />
						<Spacer size={"large"} postion={"top"} />

						<AuthInput
							// value={userData.password.value}
							autoCapitalize="none"
							// onFocus={handleInputChange.bind(
							// 	this,
							// 	"password",
							// 	"isFocused",
							// 	true
							// )}
							// onBlur={handleInputChange.bind(
							// 	this,
							// 	"password",
							// 	"isFocused",
							// 	false
							// )}
							// onChangeText={handleInputChange.bind(this, "password", "value")}
							// label={!userData.password.isFocused ? "Password" : ""}
							placeholder="Enter your password"
							secureTextEntry={true}
						/>
						<Spacer size={"large"} postion={"top"} />
						<Spacer size={"large"} postion={"top"} />

						<AuthButton
							title="Login"
							iconName={"account-arrow-right-outline"}
							IconPackage={MaterialCommunityIcons}
							// onPress={onLogin.bind(
							// 	this,
							// 	userData.email.value,
							// 	userData.password.value
							// )}
						/>
					</LoginContainer>
				</KeyboardAvoidingView>
			</OuterWrapper>
		</AccountBackground>
	);
};
