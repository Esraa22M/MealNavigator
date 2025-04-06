import { AddFavouriteButton } from "./favourites.styles";
import AntDesign from "@expo/vector-icons/AntDesign";

export const FavouriteButton = ({
	pressHandler,
	iconName,
	iconColor,
	navigation,
}) => {
	const navigateHandler = () => {
		console.log("tell me why");
		navigation.navigate("favouritesResturants");
	};
	return (
		<AddFavouriteButton
			onPress={() => {
				pressHandler();
				navigateHandler();
			}}
		>
			<AntDesign name={iconName} size={24} color={iconColor} />
		</AddFavouriteButton>
	);
};
