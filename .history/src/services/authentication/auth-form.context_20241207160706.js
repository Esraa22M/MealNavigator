import { createContext, useState } from "react";
export const AuthFormContext = createContext();
import { emailValidation, checkpassword } from "./auth-form.services";
export const AuthFormContextProvider = ({ children }) => {
	const [loginData, setLoginData] = useState({
		email: { value: "", isFocused: false, isValid: false },
		password: { value: "", isFocused: false, isValid: false, strengthbar: "" },
	});
	const [isValidLoginData, setIsValidLoginData] = useState({
		email: { isValid: false },
		password: { isValid: false, strengthbar: "" },
	});
	const validateInput = (key, value) => {
		let validationObj = {};
		if (key === "email") {
			const isValid = emailValidation(value);
			validationObj = { isValid: isValid };

			setIsValidLoginData((prevState) => ({
				...prevState,
				[key]: { ...validationObj },
			}));
		} else {
			const isValid = checkpassword(value);
			const validationObj = {
				isValid: isValid.isValid,
				strengthbar: isValid.strengthbar,
			};
			console.log(validationObj)
			setIsValidLoginData((prevState) => ({
				...prevState,
				[key]: { ...validationObj },
			}));
		}
	};
	const handleLoginDataChange = (key, field, value) => {
		setLoginData((prevState) => {
			return {
				...prevState,
				[key]: { ...prevState[key], [field]: value },
			};
		});
	};
	const value = {
		handleLoginDataChange,
		loginData,
		validateInput,
		isValidLoginData,
	};
	return (
		<AuthFormContext.Provider value={value}>
			{children}
		</AuthFormContext.Provider>
	);
};
