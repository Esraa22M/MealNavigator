import { Text, View } from "react-native";
export const MenuListItem = ({item}) => {
	return (
		<View style={{marginHorizontal:20}}>
            <Text>{ item}</Text>
		</View>
	);
};
