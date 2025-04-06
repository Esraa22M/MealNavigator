import { createContext, useState } from "react";
export const AuthFormContext = createContext();
import { colors } from "../../infastructure/theme/colors";
import { emailValidation, checkpassword } from "./auth-form.services";
export const AuthFormContextProvider = ({ children }) => {
	const [loginData, setLoginData] = useState({
		email: { value: "", isFocused: false },
		password: { value: "", isFocused: false },
	});

	const [isValidLoginData, setIsValidLoginData] = useState({
		email: { isValid: null, icon: "eye", iconColor: colors.ui.primary },
		password: {
			isValid: null,
			strengthbar: "",
			icon: "eye",
			iconColor: colors.ui.primary,
		},
	});
	const validateInput = (key, value) => {
		let validationObj = {};

		if (key === "email") {
			const isValid = emailValidation(value);

			validationObj = { isValid: isValid };
		} else {
			const isValid = checkpassword(value);
			validationObj = {
				isValid: isValid.isValid,
				strengthbar: isValid.strengthbar,
			};
		}
		const iconColor = validationObj.isValid
			? colors.text.success
			: colors.text.error;
		const iconName = validationObj.isValid
			? "check-circle-outline"
			: "close-circle-outline";
		setIsValidLoginData((prevState) => ({
			...prevState,
			[key]: { ...validationObj, icon: iconName, iconColor: iconColor },
		}));
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
