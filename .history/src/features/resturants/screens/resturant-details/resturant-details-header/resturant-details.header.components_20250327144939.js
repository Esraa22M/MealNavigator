import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";
import { fonts } from "../../../../../infastructure/theme/fonts";
import Icon from "react-native-vector-icons/FontAwesome6";
import { Favourite } from "../../../../../components/favourites/favourite.components";
import { colors } from "../../../../../infastructure/theme/colors";
import { BackButton } from "../../../../../ui/back-button/back-button.components";
import { FontAwesome } from "@expo/vector-icons";
import { Spacer } from "../../../../../components/spacer/spacer.component";
const { width, height } = Dimensions.get("screen");
import { useNavigation } from "@react-navigation/native";
export const Header = ({ item }) => {
	const navigation = useNavigation();
	const handleMapNavigation = (event) => {
		event.stopPropagation();
		navigation.navigate("resturantMapView", { resturant: item });
	};

	return (
		<>
			<BackButton />
			<View style={styles.itemContainer}>
				<Image
					source={{ uri: item.images[3] }}
					style={{
						flex: 1,
						height: "30%",
						width: width,
					}}

				/>
				<LinearGradient
					colors={["transparent", "rgba(0,0,0,0.8)"]}
					style={[styles.background]}
				>
					<View
						style={{
							gap: 10,
							flex: 1,

							justifyContent: "flex-end",
							width: "100%",
						}}
					>
						<Text style={styles.title}>{item.name}</Text>
						<Text style={styles.description}> {item.address}</Text>
					</View>
					<View
						style={{
							flexDirection: "row",
							flex: 1,
							justifyContent: "space-around",
							width: width,
						}}
					>
						<View
							style={{
								backgroundColor: "white",
								padding: 20,
								borderRadius: 50,
								height: 60,
								width: width / 1.6,
								textAlign: "center",
								alignSelf: "flex-end",
								marginBottom: -30,
								flexDirection: "row",
								justifyContent: "space-evenly",
							}}
						>
							<Icon name="truck-fast" size={24} color={colors.ui.primary} />
							<Text
								style={{
									textAlign: "center",
									color: colors.ui.accent,
									fontFamily: fonts.body,
								}}
							>
								Delivery time is 30-40
							</Text>
						</View>
						<View
							style={{
								backgroundColor: "white",
								width: 50,
								height: 50,
								justifyContent: "center",
								borderRadius: 5000,
								textAlign: "center",
								alignItems: "center",
								alignSelf: "flex-end",
								marginBottom: -25,
							}}
						>
							<Favourite resturant={item} />
						</View>
						<Pressable
							style={({ pressed }) => [
								pressed && { backgroundColor: colors.ui.accent },
								{
									backgroundColor: "white",
									width: 30,
									height: 30,
									justifyContent: "center",
									borderRadius: 5000,
									textAlign: "center",
									alignItems: "center",
									alignSelf: "flex-end",
									marginBottom: -15,

								}	
							]}
							onPress={handleMapNavigation}
						>
							<FontAwesome name="map-marker" color="red" size={24} />
						</Pressable>
					</View>
				</LinearGradient>
			</View>
		</>
	);
};
const styles = StyleSheet.create({
	itemContainer: {
		width: width,
		height: "30%",
	},
	background: {
		position: "absolute",
		flex: 1,
		height: "100%",

		width: width,
		// padding: 20,
		justifyContent: "space-between",
		alignItems: "center",
		position: "absolute",
	},
	title: {
		color: "#fff",
		fontSize: 23,
		fontWeight: 600,
		letterSpacing: 1.5,
		textAlign: "center",
		fontFamily: fonts.heading,
	},
	description: {
		color: "#fff",
		fontSize: 14,
		letterSpacing: 1.2,
		fontFamily: fonts.body,
		textAlign: "center",
	},
	icon: { backgroundColor: "rgba(0,0,0,0.3)", padding: 5, borderRadius: 1000 },
});
