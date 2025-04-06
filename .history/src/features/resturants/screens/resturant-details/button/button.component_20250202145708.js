import { Pressable, Text } from "react-native";
import Icon from "@react-native-vector-icons/Ionicons";

export const Button = ({ pressHandler }) => {
	return (
		<Pressable>
			<View>
				<View>
					<Icon name />
				</View>
			</View>
		</Pressable>
	);
};
