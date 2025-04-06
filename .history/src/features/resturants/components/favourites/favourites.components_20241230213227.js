import { FavouriteButton } from "../../../../components/favourites/favourite-button.components";
import { useContext } from "react";
import { FavouritesContext } from "../../../../services/favourites/favourites.context";
export const FavouritesView = () => {
    const {setIsToggled, isToggled } = useContext(FavouritesContext);
	const pressHandler = setIsToggled.bind(this, !isToggled);
	return (
		<FavouriteButton
			iconColor={"black"}
			iconName={isToggled ? "heart" : "hearto"}
			size={50}
			pressHandler={pressHandler}
		/>
	);
};
