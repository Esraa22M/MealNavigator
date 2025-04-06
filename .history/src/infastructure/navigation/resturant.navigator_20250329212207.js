import {
	createStackNavigator,
} from "@react-navigation/stack";
import React, { lazy, Suspense } from "react";

const ResturantsScreen = lazy(() =>
	import(
		"../../features/resturants/screens/resturants-view/resturants.screens"
	).then(
		(module) => ({ default: module.ResturantScreen }) // لازم تحددي الـ default
	)
);
import { ResturantDetails } from "../../features/resturants/screens/resturant-details/resturant-details.screens";
import { CategoryItemDetails } from "../../features/resturants/screens/resturant-details/category-item-details/category-item.components";
import { ResturantMapView } from "../../features/map/screens/map-overview/resturant-map.components";
const ResturantsStack = createStackNavigator();
export const ResturantsNavigator = () => {
	return (
		<ResturantsStack.Navigator
			screenOptions={{
				headerShown: false,
				presentation: "modal",
				gestureEnabled: true,
			}}
		>
			<ResturantsStack.Screen name="Resturants" component={ResturantsScreen} />
			<ResturantsStack.Screen
				name="ResturantDetails"
				component={ResturantDetails}
			/>
			<ResturantsStack.Screen
				name="resturantMapView"
				component={ResturantMapView}
			/>
			<ResturantsStack.Screen
				name="categoryItemDetails"
				component={CategoryItemDetails}
			/>
		</ResturantsStack.Navigator>
	);
};
