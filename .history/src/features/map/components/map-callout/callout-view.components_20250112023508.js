import { Callout, CalloutSubview } from "react-native-maps";
import { Pressable } from "react-native";
import { ResturantInfoCompact } from "../../../../components/resturant-info-compact/restuant-info-compact.components";
export const MapCallout = ({ resturant,navigation }) => {
	return (
		<Pressable onPress={()=>{navigation.navigate('ResturantDetails',{resturant})}} style={{width:300, height:300}}>
			<ResturantInfoCompact resturant={resturant}  />
		</Pressable>
	);
};
