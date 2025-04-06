import { Container } from "../../../../components/utils/safe-area.components";
import { ResturantInfoCard } from "../../components/resturant-info/resturant-info.components";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { ResturantInfoLists } from "./resturant-info-lists/resturants-info-lists.components";
import { Header } from "./resturant-details-header/resturant-details.header.components";
import { ScrollView, View } from "react-native";
import { MenuItems } from "./menu-items-list/menu-items-list.components";
export const ResturantDetails = ({ route }) => {
	const { resturant } = route.params;
	return (
		<View style={{flex:1,}}>
				{/* <Spacer postion={"bottom"} size="large"> */}
					{/* <Header item={ resturant} /> */}
				<MenuItems item={resturant } />
				{/* </Spacer> */}
		</View>
	);
};
