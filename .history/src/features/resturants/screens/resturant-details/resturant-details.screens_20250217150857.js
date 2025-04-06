import { Container } from "../../../../components/utils/safe-area.components";
import { ResturantInfoCard } from "../../components/resturant-info/resturant-info.components";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { ResturantInfoLists } from "./resturant-info-lists/resturants-info-lists.components";
import { Header } from "./resturant-details-header/resturant-details.header.components";
import { MenuItems } from "./menu-items-list/menu-items-list.components";
import { Button } from "./button/button.component";

import { View } from "react-native";
export const ResturantDetails = ({ route, navigation }) => {
	const item = resturant?.route?.params;
	return (
		<View style={{ flex: 1 }}>
			<Spacer postion={"bottom"} size="large">
				<Header item={item} />
				<MenuItems item={item} navigation={ navigation} />
			</Spacer>
		</View>
	);
};
