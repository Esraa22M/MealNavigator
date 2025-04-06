import {  useState, createContext } from "react";
import { requestLogin } from "./authentication.service";
export const AuthenticationContext = createContext();
export const AuthenticationContextProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const onLogin = async (email, password) => {
		setIsLoading(true);
		try {
			const { user } = await requestLogin(email, password);
			setUser({ ...user });
			setIsAuthenticated(true);
			setIsLoading(false);
		} catch (err) {
			setError(err);
		}
	};
	value = { isLoading, user, error,onLogin,isAuthenticated:!!user };

	return (
		<AuthenticationContext.Provider value={value}>
			{children}
		</AuthenticationContext.Provider>
	);
};
