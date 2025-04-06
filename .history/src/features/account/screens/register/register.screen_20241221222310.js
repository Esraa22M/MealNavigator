import { AuthContent } from "../../components/auth/auth-content.components";
import { useContext } from "react";
import { AuthFormContext } from "../../../../services/authentication/auth-form.context";
export const RegisterScreen = () => {
	const { isValidRegisterData, registerData } = useContext(AuthFormContext);
	return (
		<AuthContent
			isLogin={false}
			isValidInputData={isValidRegisterData}
			inputData={registerData}
		/>
	);
};
