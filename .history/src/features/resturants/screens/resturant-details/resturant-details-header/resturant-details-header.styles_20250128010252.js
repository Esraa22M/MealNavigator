import { View, Image, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
export const Header = ({ item }) => {
	console.log(item)
	return (
		<View>
			<Text>esraa</Text>
			<Image source={{ uri: item.photos[0] }} />
		</View>
	);
};
