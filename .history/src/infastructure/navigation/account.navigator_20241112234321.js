import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";
const AccountStack = createStackNavigator();
const MainScreen = ()=><Text>main screen</Text>
const LoginScreen = ()=><Text>login screen</Text>

export const AccountNavigator = () => {
	return (
		<>
			<AccountStack.Navigator screenOptions={{headerShown:false}}>
				<Stack.Screen name="Main" component={MainScreen} />
				<Stack.Screen name="Login" component={LoginScreen} />

			</AccountStack.Navigator>
		</>
	);
};
