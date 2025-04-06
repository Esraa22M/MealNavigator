import { AuthForm } from "./auth-form.components";
export const AuthContent = ({ isLogin , mode }) => {
    console.log(isLogin,"my hope")
    return <AuthForm isLogin={isLogin} mode={ mode} />;
};
