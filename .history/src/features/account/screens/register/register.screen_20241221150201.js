import { AuthContent } from "../../components/auth/auth-content.components";
import { AuthForm } from "../../components/auth/auth-form.components";
export const RegisterScreen = (isLogin) => {
	return <AuthContent isLogin={isLogin} />;
};
