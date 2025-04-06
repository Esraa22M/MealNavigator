import { createContext } from "react";
export const AuthFormContext = createContext();
export const AuthFormContextProvider = ({ children }) => {
	const [loginData, setLoginData] = useState({
		email: { value: "", isFocused: false },
		password: { value: "", isFocused: false },
	});
	const handleInputChange = (key, field, value) => {
		console.log(field, value);
		setUserData((prevState) => ({
			...prevState,
			[key]: { ...prevState[key], [field]: value },
		}));
	};
	return <AuthFormContext.Provider>{children}</AuthFormContext.Provider>;
};
