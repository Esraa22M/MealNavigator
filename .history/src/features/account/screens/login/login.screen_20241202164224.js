import { AccountBackground } from "../account/account.styles";
import { OuterWrapper, LoginContainer, ImageContainer } from "./login.styles";
import Logo from "../../../../../assets/bg-images/dish-dinner-svgrepo-com.svg";

import { AuthHeader } from "../../components/header/authentication-header.components";
export const LoginScreen = () => {
	return (
		<AccountBackground
			source={require("../../../../../assets/bg-images/wallpaper7.jpg")}
		>
			<ImageContainer>
				<Logo width={200} />
			</ImageContainer>
			<OuterWrapper>
				<AuthHeader />
				<LoginContainer></LoginContainer>
			</OuterWrapper>
		</AccountBackground>
	);
};
