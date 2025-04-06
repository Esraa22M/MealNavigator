import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
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
	ResturantScreen: { icon: "restaurant", iconPackage: MaterialIcons },
	settings: { icon: "app-settings-alt", iconPackage: MaterialIcons },
	map: { icon: "map-marker-alt", iconPackage: Fontisto },
};
const createScreenOptions = ({ route }) => ({
	headerShown: false,
	// tabBarIcon: ({ color, size }) => {
	// 	const iconName = TAB_ICON[route.name].icon;
	// 	const PackageName = TAB_ICON[route.name].iconPackage;
	// 	return <PackageName name={iconName} size={size} color={color} />;
	// },
	tabBarIcon:({color, size})=><MaterialIcons name="restaurant"/>,
	tabBarActiveTintColor: "tomato",
	tabBarInactiveTintColor: "gray",
});
export const AppNavigator = () => (
		<Tab.Navigator screenOptions={createScreenOptions}>
			<Tab.Screen component={ResturantsNavigator} name="Resturants" />
			<Tab.Screen component={MapScreenOverview} name="map" />
			<Tab.Screen component={Settings} name="settings" />
		</Tab.Navigator>
);
