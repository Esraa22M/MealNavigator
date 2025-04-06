import { AccountBackground } from "../account/account.styles";
import { OuterWrapper } from "./login.styles";
export const LoginScreen = () => {
	return (
		<AccountBackground
			source={require("../../../../../assets/bg-images/wallpaper7.jpg")}
		><OuterWrapper></OuterWrapper></AccountBackground>
	);
};
