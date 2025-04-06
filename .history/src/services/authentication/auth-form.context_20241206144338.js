import { createContext, useState } from "react";
export const AuthFormContext = createContext();
import { emailValidation, checkpassword } from "./auth-form.services";
export const AuthFormContextProvider = ({ children }) => {
	const [loginData, setLoginData] = useState({
		email: { value: "", isFocused: false },
		password: { value: "", isFocused: false },
	});
	const [isValidLoginData, setIsValidLoginData] = useState({
		email: false,
		password: false,
	});
	const validateInput = (key) => {
		if (key === "email") {
			const isValid = emailValidation(key);
			setIsValidLoginData((prevState) => ({ ...prevState, [key]: isValid }));
		} else {
			return checkpassword;
		}
	};
	const handleLoginDataChange = (key, field, value) => {
		setLoginData((prevState) => ({
			...prevState,
			[key]: { ...prevState[key], [field]: value },
		}));
	};
	const value = { handleLoginDataChange, loginData };
	return (
		<AuthFormContext.Provider value={value}>
			{children}
		</AuthFormContext.Provider>
	);
};
