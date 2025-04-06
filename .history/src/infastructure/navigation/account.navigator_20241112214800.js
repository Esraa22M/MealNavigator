import { createStackNavigator } from "@react-navigation/stack";

const AccountStackScreens = createStackNavigator({
	screens: {
	},
});
const AccountNavigation = createStackNavigator(AccountStackScreens);

export const AccountNavigator = () => {
	return <AccountNavigation />;
};
