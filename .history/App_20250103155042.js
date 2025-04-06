import { useFonts } from "expo-font";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { ResturantContextProvider } from "./src/services/resturants/resturants.context";
import { theme } from "./src/infastructure/theme";
import { Raleway_400Regular } from "@expo-google-fonts/raleway";
import { Quicksand_400Regular } from "@expo-google-fonts/quicksand";
import { LoadingOverLay } from "./src/ui/loading-overlay.components";
import { Bokor_400Regular } from "@expo-google-fonts/bokor";
import { Navigation } from "./src/infastructure/navigation";
import { LocationContextProvider } from "./src/services/location/location.context";
import { ResturantDetailsContextProvider } from "./src/services/resturan-details/resturant-details.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { AuthFormContextProvider } from "./src/services/authentication/auth-form.context";
export default function App() {
	const [fontsLoaded] = useFonts({
		Raleway_400Regular,
		Quicksand_400Regular,
		Bokor_400Regular,
	});
	if (!fontsLoaded) {
		return <LoadingOverLay />;
	}
	async function getRestaurantDetails() {
		const formData = new URLSearchParams();
		formData.append('currency', 'USD');
		formData.append('language', 'en_US');
		formData.append('location_id', '15333482');
	  
		try {
		  const response = await fetch('https://worldwide-restaurants.p.rapidapi.com/detail', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/x-www-form-urlencoded',
			  'x-rapidapi-host': 'worldwide-restaurants.p.rapidapi.com',
			  'x-rapidapi-key': '9c62f28ad2msh779ebe976fd5456p128169jsn40d685996424'
			},
			body: formData.toString() // Send the form data as x-www-form-urlencoded
		  });
	  
		  if (!response.ok) {
			throw new Error('Network response was not ok');
		  }
	  
		  const data = await response.json();
		  console.log(data); // Handle the response data
		  return data; // Return the data
		} catch (error) {
		  console.error('Error:', error);
		  return null; // Return null if there's an error
		}
	  }
	  
	  // Example usage
	  getRestaurantDetails().then(data => {
		console.log(data.results); // Logs the returned data
	  });
	  
	return (
		<>
			<ThemeProvider theme={theme}>
				<AuthFormContextProvider>
					<AuthenticationContextProvider>
						<FavouritesContextProvider>
							<ResturantDetailsContextProvider>
								<LocationContextProvider>
									<ResturantContextProvider>
										<Navigation />
									</ResturantContextProvider>
								</LocationContextProvider>
							</ResturantDetailsContextProvider>
						</FavouritesContextProvider>
					</AuthenticationContextProvider>
				</AuthFormContextProvider>
				<ExpoStatusBar style="auto" />
			</ThemeProvider>
		</>
	);
}
