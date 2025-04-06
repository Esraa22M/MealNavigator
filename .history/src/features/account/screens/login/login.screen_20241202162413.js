import { AccountBackground } from "../account/account.styles";
import { OuterWrapper, LoginContainer } from "./login.styles";
import { AuthHeader } from "../../components/header/authentication-header.components";
export const LoginScreen = () => {
	return (
		<AccountBackground
			source={require("../../../../../assets/bg-images/wallpaper7.jpg")}
		>
			<OuterWrapper>
				<AuthHeader />
				<LoginContainer></LoginContainer>
			</OuterWrapper>
		</AccountBackground>
	);
};
