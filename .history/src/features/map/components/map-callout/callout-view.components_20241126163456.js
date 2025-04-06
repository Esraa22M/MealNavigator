import { Callout } from "react-native-maps";
import MapView from "react-native-maps";
import { View , Text } from "react-native";
import WebView from "react-native-webview";
import { ResturantInfoCompact } from "../../../../components/resturant-info-compact/restuant-info-compact.components";
export const MapCallout = ({ resturant, navigation }) => {
	return (
		<Callout
			onPress={() => {
				navigation.navigate("ResturantDetails", { resturant });
			}}
		>
			<WebView>
				<Text>My Marker</Text>
				<Text>More details about the location</Text>
			</WebView>
		</Callout>
	);
};
