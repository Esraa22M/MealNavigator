import { AuthForm } from "./auth-form.components";
export const AuthContent = ({ isLogin }) => {
    console.log(isLogin,"my hope")
	return <AuthForm isLogin={isLogin} />;
};
