import { createStackNavigator } from "@react-navigation/stack";

const AccountStackScreens = createStackNavigator({
	screens: {
		Home: HomeScreen,
		Profile: ProfileScreen,
	},
});
const AccountNavigation = createStaticNavigation();

export const AccountNavigator = () => {
	return <AccountNavigation />;
};
