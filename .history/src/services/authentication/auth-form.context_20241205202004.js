import { createContext } from "react";
import { emailValidation ,checkpassword} from "./auth-form.services";
export const AuthFormContext = createContext();
export const AuthFormContextProvider = ({ children }) => {
	const [loginData, setLoginData] = useState({
		email: { value: "", isFocused: false, isValid:false },
		password: { value: "", isFocused: false, isValid:false, strength:'' },
	});
	const handleLoginDataChange = (key, field, value) => {

		setLoginData((prevState) => ({
			...prevState,
			[key]: { ...prevState[key], [field]: value },
		}));
	};
	return <AuthFormContext.Provider>{children}</AuthFormContext.Provider>;
};
