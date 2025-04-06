import { createContext, useState } from "react";
export const AuthFormContext = createContext();
import { emailValidation, checkpassword } from "./auth-form.services";
export const AuthFormContextProvider = ({ children }) => {
	const [loginData, setLoginData] = useState({
		email: { value: "", isFocused: false , isValid:false},
		password: { value: "", isFocused: false , isValid:false , strengthbar:""},
	});
	const [isValidLoginData, setIsValidLoginData] = useState({
		email: false,
		password: false,
	});
	const validateInput = (key, value) => {

		if (key === "email") {
			const isValid = emailValidation(value);
			return isValid;

		} else {
			const isValid = checkpassword(value);
			return { isValid: isValid.isValid, strengthbar: isValid.strengthbar }


		}
	};
	const handleLoginDataChange = (key, field, value) => {
		setLoginData((prevState) => ({
			...prevState,
			[key]: { ...prevState[key], [field]: value },
		}));
	};
	const value = { handleLoginDataChange, loginData , validateInput , isValidLoginData};
	return (
		<AuthFormContext.Provider value={value}>
			{children}
		</AuthFormContext.Provider>
	);
};
