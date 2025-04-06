import { AuthForm } from "./auth-form.components";

export const AuthContent = ({ isLogin,isValidInputData,inputData  }) => {
    console.log(isLogin,"my hope")
    return <AuthForm isLogin={isLogin} isValidInputData={isValidInputData} inputData={inputData} />;
};
