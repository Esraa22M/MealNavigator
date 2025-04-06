import { Callout, CalloutSubview } from "react-native-maps";
import { ResturantInfoCompact } from "../../../../components/resturant-info-compact/restuant-info-compact.components";
export const MapCallout = ({ resturant,navigation }) => {
	return (
		<Callout onPress={()=>{navigation.navigate('ResturantDetails',{resturant})}} style={{width:300, height:300}}>
			<ResturantInfoCompact resturant={resturant}  />
		</Callout>
	);
};
