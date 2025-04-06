// import {  useState, createContext } from "react";
// import { login } from "./authentication.service";
// export const AuthenticationContext = createContext();
// export const AuthenticationContextProvider = ({ children }) => {
// 	const [isLoading, setIsLoading] = useState(false);
// 	const [user, setUser] = useState(null);
// 	const [error, setError] = useState(null);
// 	const [isAuthenticated, setIsAuthenticated] = useState(false);
// 	const onLogin = async (email, password) => {
// 		setIsLoading(true);
// 		try {
// 			const { user } = await login(email, password);
// 			setUser({ ...user });
// 			setIsAuthenticated(true);
// 			setIsLoading(false);
// 		} catch (err) {
// 			setError(err.toString());
// 		}
// 	};
// 	value = { isLoading, user, error,onLogin,isAuthenticated };

// 	return (
// 		<AuthenticationContext.Provider value={value}>
// 			{children}
// 		</AuthenticationContext.Provider>
// 	);
// };
import { createContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthenticationContext = createContext({
	token: "",
	isAuthenticated: false,
	authenticate: () => {},
	logout: () => {},
});
export const AuthenticationContextProvider = ({ children }) => {
	const [authToken, setAuthToken] = useState();
	
	function authenticate(token) {
		setAuthToken(token);
		AsyncStorage.setItem("token", token);
	}

	function logout() {
		setAuthToken(null);
		AsyncStorage.removeItem("token");

	}
	const value = {
		authenticate,
		logout,
		token: authToken,
		isAuthenticated: !!authToken,
	};
	return <AuthenticationContext.Provider value={value}>{children}</AuthenticationContext.Provider>;
};
