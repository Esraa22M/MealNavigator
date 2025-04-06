import { Text, View } from "react-native";
export const MenuListItem = ({item}) => {
	return (
		<View style={{marginHorizontal:30}}>
            <Text>{ item}</Text>
		</View>
	);
};
