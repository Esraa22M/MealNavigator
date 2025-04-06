import { View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
export const Header = ({ item }) => {
	return (
		<View>
			<Image source={{ uri: item.photos[0] }} />
		</View>
	);
};
