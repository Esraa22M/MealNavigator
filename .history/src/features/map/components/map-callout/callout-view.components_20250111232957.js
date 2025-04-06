import { Callout } from "react-native-maps";
import { View } from "react-native";
import { ResturantInfoCompact } from "../../../../components/resturant-info-compact/restuant-info-compact.components";
export const MapCallout = ({ resturant,navigation }) => {
	return (
		<View onPress={()=>{navigation.navigate('ResturantDetails',{resturant})}}>
			<ResturantInfoCompact resturant={resturant}  />
		</View>
	);
};
