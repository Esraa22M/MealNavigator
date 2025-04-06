import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import React, { lazy, Suspense } from "react";

import { ResturantScreen } from "../../features/resturants/screens/resturants-view/resturants.screens";
import { ResturantDetails } from "../../features/resturants/screens/resturant-details/resturant-details.screens";
import { CategoryItemDetails } from "../../features/resturants/screens/resturant-details/category-item-details/category-item.components";
import { ResturantMapView } from "../../features/map/screens/map-overview/resturant-map.components";
const ResturantsStack = createStackNavigator();
export const ResturantsNavigator = () => {
	return (
		<ResturantsStack.Navigator screenOptions={{headerShown:false,presentation:'modal',  gestureEnabled: true
		}}>
			<ResturantsStack.Screen name="Resturants" component={ResturantScreen} />
            <ResturantsStack.Screen name="ResturantDetails" component={ResturantDetails} />
            <ResturantsStack.Screen name="resturantMapView" component={ResturantMapView} />
            <ResturantsStack.Screen name="categoryItemDetails" component={CategoryItemDetails} />

		</ResturantsStack.Navigator>
	);
};
