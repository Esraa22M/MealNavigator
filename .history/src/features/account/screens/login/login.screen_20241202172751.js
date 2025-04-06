import { AccountBackground } from "../account/account.styles";
import { OuterWrapper, LoginContainer, ImageContainer } from "./login.styles";
import Logo from "../../../../../assets/bg-images/dish-dinner-svgrepo-com.svg";

import { AuthHeader } from "../../components/header/authentication-header.components";
export const LoginScreen = () => {
	return (
		<AccountBackground
			source={require("../../../../../assets/bg-images/wallpaper7.jpg")}
		>
			<OuterWrapper>
				<AuthHeader />
				<LoginContainer>
				<ImageContainer>
						<Logo style={{width:100, height:100}} />
					</ImageContainer>
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
				</LoginContainer>
			</OuterWrapper>
		</AccountBackground>
	);
};
