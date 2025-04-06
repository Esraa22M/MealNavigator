import { MapViewWrapper } from "./map-overview.styles";
import { Search } from "../../components/search/search.components";
import { LocationContext } from "../../../../services/location/location.context";
import { ResturantContext } from "../../../../services/resturants/resturants.context";
import { useContext, useEffect, useState } from "react";
import { Callout, Marker } from "react-native-maps";
import { Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { MapCallout } from "../../components/map-callout/callout-view.components";
export const ResturantMapView = () => {
    // const navigation = useNavigation();
    // const route = useRoute();
    // const { resturant } = route.params;
    // console.log("hi", resturant)
	// return (
	// 	<>
	// 		<MapViewWrapper
	// 			style={{ height: "100%" }}
	// 			region={{
	// 				latitude: resturant?.viewport?.northeast?.lat,
	// 				longitude: resturant?.viewport?.northeast?.lng,
	// 				latitudeDelta: (resturant?.viewport?.northeast?.lat-resturant?.viewport?.southwest?.lat),
	// 				longitudeDelta:(resturant?.viewport?.northeast?.lng-resturant?.viewport?.southwest?.lng),

	// 			}}
	// 		>
	// 					<Marker
	// 					onPress={()=>navigation.navigate("All", {screen:'ResturantDetails',params:{resturant:resturant}})}
	// 						key={resturant.name}
	// 						coordinate={{
	// 							latitude: resturant.geometry.location.lat,
	// 							longitude: resturant.geometry.location.lng,
	// 						}}
	// 					>
	// 					</Marker>
	// 		</MapViewWrapper>
	// 	</>
	// );
    export const ResturantMapView = () => {
        const navigation = useNavigation();
        const route = useRoute();
        const { resturant } = route.params;
    
        if (!resturant?.geometry?.location) {
            return <Text>Loading...</Text>; // تجنب كراش لو البيانات مش موجودة
        }
    
        return (
            <MapViewWrapper
                style={{ height: "100%" }}
                region={{
                    latitude: resturant.geometry.location.lat,
                    longitude: resturant.geometry.location.lng,
                    latitudeDelta: Math.abs(
                        (resturant?.viewport?.northeast?.lat || 0) - 
                        (resturant?.viewport?.southwest?.lat || 0)
                    ) || 0.02,
                    longitudeDelta: Math.abs(
                        (resturant?.viewport?.northeast?.lng || 0) - 
                        (resturant?.viewport?.southwest?.lng || 0)
                    ) || 0.02,
                }}
            >
                <Marker
                    onPress={() => navigation.navigate("All", {
                        screen: 'ResturantDetails',
                        params: { resturant }
                    })}
                    key={resturant.name}
                    coordinate={{
                        latitude: resturant.geometry.location.lat,
                        longitude: resturant.geometry.location.lng,
                    }}
                />
            </MapViewWrapper>
        );
    };
    
};
