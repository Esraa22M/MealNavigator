import {
	MainHeaderContainer,
	MainHeaderOuterContainer,
	IconWrapper,
	FavouritesWrapper,
} from "./main-header.styles";
import Logo from "../../../../../assets/bg-images/dish-dinner-svgrepo-com.svg";
import { useContext, useState } from "react";
import { HeaderContent } from "../../../../components/header/header.styles";
import { FavouritesView } from "../favourites/favourites.components";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { Search } from "../search/search.components";
import { AntDesign } from "@expo/vector-icons";
import { Pressable, View, Text } from "react-native";
import { FavouritesContext } from "../../../../services/favourites/favourites.context";
import { colors } from "../../../../infastructure/theme/colors";
export const MainHeader = ({ navigation }) => {
	const { favourites, isToggled } = useContext(FavouritesContext);
	const [showSearch, setShowSearch] = useState(false);
	return (
		<>
			{!showSearch&&<MainHeaderContainer>
				<View
					style={{
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "row",
					}}
				>
					<View
						style={{
							shadowColor: "#000",
							shadowOffset: { width: 0, height: 2 },
							shadowOpacity: 0.8,
							shadowRadius: 2,
							elevation: 5,
							backgroundColor: "white",
							borderRadius: 10000,
						}}
					>
						<Logo />
					</View>
					<HeaderContent
						variant="body"
						style={{
							fontSize: 25,
							color: colors.ui.primary,
							fontWeight: "700",
							lineHeight: 50,
							marginLeft: 10,
						}}
					>
						Meal Navigator
					</HeaderContent>
				</View>

				<View
					style={{
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "row",
					}}
				>
					<View
						style={{
							backgroundColor: colors.ui.disabled,
							borderRadius: 10000,
							padding: 5,
							marginLeft: 5,
						}}
					>
						<AntDesign name="search1" color={colors.brand.muted} size={24} onPress={()=>setShowSearch(true)} />
					</View>
				</View>
			</MainHeaderContainer>}
			<View>
				{showSearch && <Search setShowSearch={setShowSearch} />}
			</View>

			{/* <Spacer postion={"bottom"} size="large" /> */}
			{/* <Spacer postion={"bottom"} size="large" /> */}
		</>
	);
};
