import { createContext } from "react";
export const AuthFormContext = createContext();
export const AuthFormContextProvider = ({ children }) => {
	const [loginData, setLoginData] = useState({
		email: { value: "", isFocused: false, valid:false },
		password: { value: "", isFocused: false, valid:false },
	});
	const handleLoginDataChange = (key, field, value) => {
		console.log(field, value);
		setLoginData((prevState) => ({
			...prevState,
			[key]: { ...prevState[key], [field]: value },
		}));
	};
	return <AuthFormContext.Provider>{children}</AuthFormContext.Provider>;
};
