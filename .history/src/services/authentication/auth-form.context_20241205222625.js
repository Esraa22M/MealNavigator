import { createContext , useState} from "react";
export const AuthFormContext = createContext();
export const AuthFormContextProvider = ({ children }) => {
	const [loginData, setLoginData] = useState({
		email: { value: "", isFocused: false },
		password: { value: "", isFocused: false },
	});
	const handleLoginDataChange = (key, field, value) => {
		setLoginData((prevState) => ({
			...prevState,
			[key]: { ...prevState[key], [field]: value },
		}));
	};
    const value = {handleLoginDataChange , loginData}
	return <AuthFormContext.Provider value={value}>{children}</AuthFormContext.Provider>;
};
