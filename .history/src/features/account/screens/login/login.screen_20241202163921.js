import { AccountBackground } from "../account/account.styles";
import { OuterWrapper, LoginContainer } from "./login.styles";
import Logo from "../../../../../assets/bg-images/dish-dinner-svgrepo-com.svg";

import { AuthHeader } from "../../components/header/authentication-header.components";
export const LoginScreen = () => {
	return (
		<AccountBackground
			source={require("../../../../../assets/bg-images/wallpaper7.jpg")}
		>
			<OuterWrapper>
				<AuthHeader />
				<LoginContainer><Logo width={100} /></LoginContainer>
			</OuterWrapper>
		</AccountBackground>
	);
};
