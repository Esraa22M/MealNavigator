import { createContext, useState } from "react";
export const AuthFormContext = createContext();
import { colors } from "../../infastructure/theme/colors";
import {
	emailValidation,
	checkpassword,
	nameValidation,
	matchedPassword,
} from "./auth-form.services";
export const AuthFormContextProvider = ({ children }) => {
	const [loginData, setLoginData] = useState({
		email: { value: "", isFocused: false },
		password: { value: "", isFocused: false },
	});
	const [registerData, setRegisterData] = useState({
		firstName: { value: "", isFocused: false },
		lastName: { value: "", isFocused: false },
		email: { value: "", isFocused: false },
		password: { value: "", isFocused: false },
		repeatedPassword: { value: "", isFocused: false },
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
	const [isValidRegisterData, setIsValidRegisterData] = useState({
		firstName: { isValid: null, icon: "eye", iconColor: colors.ui.primary },
		lastName: { isValid: null, icon: "eye", iconColor: colors.ui.primary },

		email: { isValid: null, icon: "eye", iconColor: colors.ui.primary },
		password: {
			isValid: null,
			strengthbar: "",
			icon: "eye",
			iconColor: colors.ui.primary,
		},
		repeatedPassword: {
			isValid: null,
			strengthbar: "",
			icon: "eye",
			iconColor: colors.ui.primary,
		},
	});
	const validateInput = (key, value, mode) => {
		let validationObj = {};
		let isValid = false;
		if (key === "firstName" || key === "lastName") {
			isValid = nameValidation(value);
			validationObj = { isValid: isValid };
		} else if (key === "email") {
			isValid = emailValidation(value);

			validationObj = { isValid: isValid };
		} else if (key === "repeatedPassword") {
			isValid = matchedPassword(value);
			validationObj = { isValid: isValid };
		} else {
			isValid = checkpassword(value);
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
		mode === "login"
			? setIsValidLoginData((prevState) => ({
					...prevState,
					[key]: { ...validationObj, icon: iconName, iconColor: iconColor },
				}))
			: setIsValidRegisterData((prevState) => ({
					...prevState,
					[key]: { ...validationObj, icon: iconName, iconColor: iconColor },
				}));
	};
	const handleDataChange = (key, field, value, mode) => {
		console.log(key , field)
		console.log(value , mode)

		mode === "login"
			? setLoginData((prevState) => {
					return {
						...prevState,
						[key]: { ...prevState[key], [field]: value },
					};
				})
			: setRegisterData((prevState) => {
					return {
						...prevState,
						[key]: { ...prevState[key], [field]: value },
					};
				});
	};
	const value = {
		handleDataChange,
		loginData,
		validateInput,
		isValidLoginData,
		registerData,
		isValidRegisterData,
	};
	return (
		<AuthFormContext.Provider value={value}>
			{children}
		</AuthFormContext.Provider>
	);
};
