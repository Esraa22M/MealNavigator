import { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { AppNavigator } from "./app.navigator";
import { AccountNavigator } from "./account.navigator";
export const Navigation = () => {
	const { isAuthenticated } = useContext(AuthenticationContext);
	console.log(isAuthenticated,"esraa")
	return (
		<NavigationContainer>
			{isAuthenticated?<AppNavigator />:<AccountNavigator/>} 
		</NavigationContainer>
	);
};
