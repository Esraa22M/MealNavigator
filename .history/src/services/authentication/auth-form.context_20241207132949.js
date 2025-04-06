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
	const validateInput = (key, value) => {
		console.log("here1");

		if (key === "email") {
			const isValid = emailValidation(value);
			setIsValidLoginData((prevState) => ({ ...prevState, [key]: isValid }));
		} else {
			const isValid = checkpassword(value);
			setIsValidLoginData((prevState) => ({ ...prevState, [key]: isValid }));

		}
	};
	const handleLoginDataChange = (key, field, value) => {
		console.log("here1");
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
