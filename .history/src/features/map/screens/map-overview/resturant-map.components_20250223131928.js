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
    const navigation = useNavigation();
    const route = useRoute();
    const { resturant } = route.params;
	return (
		<>
			<MapViewWrapper
				style={{ height: "100%" }}
				region={{
					latitude: resturant.viewport.northeast.lat,
					longitude: resturant.viewport.northeast.lng,
					latitudeDelta: (resturant.viewport.northeast.lat-resturant.viewport.northeast.lng),
					longitudeDelta: 0.02,
				}}
			>
						<Marker
						onPress={()=>navigation.navigate("All", {screen:'ResturantDetails',params:{resturant:resturant}})}
							key={resturant.name}
							coordinate={{
								latitude: resturant.geometry.location.lat,
								longitude: resturant.geometry.location.lng,
							}}
						>
						</Marker>
			</MapViewWrapper>
		</>
	);
};
