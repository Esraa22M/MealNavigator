import { Container } from "../../../../components/utils/safe-area.components";
import { ResturantInfoCard } from "../../components/resturant-info/resturant-info.components";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { ResturantInfoLists } from "./resturant-info-lists/resturants-info-lists.components";
import { Header } from "./resturant-details-header/resturant-details-header.styles";
import { ScrollView } from "react-native";
export const ResturantDetails = ({ route }) => {
	const { resturant } = route.params;
	return (
		<ScrollView>
			<Container>
				<Spacer postion={"top"} size="large">
					{/* <ResturantInfoCard resturant={resturant} /> */}
					{/* <ResturantInfoLists /> */}
					<Header item={ resturant} />
				</Spacer>
			</Container>
		</ScrollView>
	);
};
