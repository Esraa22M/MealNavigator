import { useContext } from "react";
import { View } from "react-native";
import { FavouritesContext } from "../../services/favourites/favourites.context";
import { FavouriteButton } from "./favourite-button.components";
export const Favourite = ({ resturant }) => {
	const {  addToFavourites, removeFromFavourite, isFavourite } =
		useContext(FavouritesContext);
	const isFavouriteFlag = isFavourite(resturant);
	const FavouriteIcon = isFavouriteFlag
		? { name: "heart", color: "red" }
		: { name: "hearto", color: "black" };
	const pressHandler = isFavouriteFlag
		? removeFromFavourite.bind(this, resturant)
		: addToFavourites.bind(this, resturant);
	return (
		<View style={{ 
			shadowColor: '#000',
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.8,
			shadowRadius: 2,
			elevation: 5,
			backgroundColor:'white',
			}}>
			<FavouriteButton
			
				pressHandler={pressHandler}
				iconColor={FavouriteIcon.color}
				iconName={FavouriteIcon.name}
			/>
		</View>
	);
};
