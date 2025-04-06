import { View, Image, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
export const Header = ({ item }) => {
	console.log(item,"esraa mohamed ali");
	return (
		<View>
			<Text>esraa</Text>
			<Image source={{ uri: item.images[0] }} />
		</View>
	);
};
