import { Callout } from "react-native-maps";
import MapView from "react-native-maps";
import { ResturantInfoCompact } from "../../../../components/resturant-info-compact/restuant-info-compact.components";
export const MapCallout = ({ resturant, navigation }) => {
	return (
		<MapView.Callout
			onPress={() => {
				navigation.navigate("ResturantDetails", { resturant });
			}}
		>
			<View>
				<Text>My Marker</Text>
				<Text>More details about the location</Text>
			</View>
		</MapView.Callout>
	);
};
