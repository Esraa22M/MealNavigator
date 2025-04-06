import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ResturantsNavigator } from "./resturant.navigator";
import { Container } from "../../components/utils/safe-area.components";
import { MapScreenOverview } from "../../features/map/screens/map-overview/map-overview.screens";
import { NavigationContainer } from "@react-navigation/native";
const Tab = createBottomTabNavigator();
const Settings = () => {
	return (
		<Container>
			<Text>settings</Text>
		</Container>
	);
};
const TAB_ICON = {
	Resturants: { icon: "restaurant", iconPackage: MaterialIcons },
	settings: { icon: "app-settings-alt", iconPackage: MaterialIcons },
	map: { icon: "map-marker", iconPackage: FontAwesome },
};
const createScreenOptions = ({ route }) => ({
	headerShown: false,
	tabBarIcon: ({ color, size }) => {
		const iconName = TAB_ICON[route.name].icon;
		const PackageName = TAB_ICON[route.name].iconPackage;
		return <PackageName name={iconName} size={size} color={color} />;
	},
	tabBarActiveTintColor: "tomato",
	tabBarInactiveTintColor: "gray",
});
export const AppNavigator = () => (
		<Tab.Navigator screenOptions={createScreenOptions}>
			<Tab.Screen component={ResturantsNavigator} name="All" />
			<Tab.Screen component={MapScreenOverview} name="map" />
			<Tab.Screen component={Settings} name="settings" />
		</Tab.Navigator>
);
