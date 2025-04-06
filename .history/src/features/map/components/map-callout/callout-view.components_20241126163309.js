import { Callout } from "react-native-maps";
import MapView from "react-native-maps";
import { View , Text } from "react-native";
import { ResturantInfoCompact } from "../../../../components/resturant-info-compact/restuant-info-compact.components";
export const MapCallout = ({ resturant, navigation }) => {
	return (
		<Callout
			onPress={() => {
				navigation.navigate("ResturantDetails", { resturant });
			}}
		>
			<View>
				<Text>My Marker</Text>
				<Text>More details about the location</Text>
			</View>
		</Callout>
	);
};
