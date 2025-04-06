import { MapViewWrapper } from "./map-overview.styles";
import { Search } from "../../components/search/search.components";
import { LocationContext } from "../../../../services/location/location.context";
import { ResturantContext } from "../../../../services/resturants/resturants.context";
import { useContext, useEffect, useState } from "react";
import { Marker } from "react-native-maps";
import { Callout } from "react-native-maps";
import { Text, View } from "react-native";
import MapView from "react-native-maps";
import { MapCallout } from "../../components/map-callout/callout-view.components";
export const MapScreenOverview = ({ navigation }) => {
	const { location } = useContext(LocationContext);
	const { resturants = [] } = useContext(ResturantContext);
	const [latDelta, setLatDelta] = useState(0);
	const { lat, lng, viewport } = location;

	useEffect(() => {
		const northeastLat = viewport.northeast.lat;
		const southwestLat = viewport.southwest.lat;
		setLatDelta(northeastLat - southwestLat);
	}, [location, viewport]);
	return (
		<>
			<Search />
			<MapViewWrapper
				style={{ height: "100%" }}
				region={{
					latitude: lat,
					longitude: lng,
					latitudeDelta: latDelta,
					longitudeDelta: 0.02,
				}}
			>
				{resturants.map((resturant) => {
					return (
						<Marker
							coordinate={{
								latitude: resturant.geometry.location.lat,
								longitude: resturant.geometry.location.lng,
							}}
							key={resturant.name}
						>
							<MapView.Callout>
								<View>
									<Text>My Marker</Text>
									<Text>More details about the location</Text>
								</View>
							</MapView.Callout>
						</Marker>
						// <Marker
						// 	key={resturant.name}
						// 	coordinate={{
						// 		latitude: resturant.geometry.location.lat,
						// 		longitude: resturant.geometry.location.lng,
						// 	}}
						// 	title={resturant.name}
						// >
						// 	<Callout><Text>esraa</Text></Callout>
						// 	{/* <MapCallout resturant={resturant} navigation={ navigation} /> */}
						// </Marker>
					);
				})}
			</MapViewWrapper>
		</>
	);
};
