import React, { useContext } from "react";
import { Pressable, ScrollView } from "react-native";
import { ResturantContext } from "../../../../services/resturants/resturants.context";
import {
	ListContainer,
	ResturantsList,
	AppWrapper,
} from "./resturants-screen.styles";
import { useState, useRef } from "react";
import { HeaderContent } from "../../../../components/header/header.styles";
import { LoadingDataIndicator } from "../../../../ui/loading-data-indicator/loading-data-indicator.components";
import { ResturantInfoCard } from "../../components/resturant-info/resturant-info.components";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { MainHeader } from "../../components/main-header/main-header.components";
import { JumpUpButton } from "../../../../ui/jump-up/jump-up-button.components";
import { useScrollToTop } from "@react-navigation/native";

const RestaurantListView = React.forwardRef((props, ref) => {
	return <ResturantsList {...props} ref={ref} />;
});

export const ResturantScreen = ({ navigation }) => {
	const { resturants, isLoading } = useContext(ResturantContext);
	const handleNavigation = (item) => {
		navigation?.navigate("ResturantDetails", { resturant: item });
	};
	const [hideHeader, setHideHeader] = useState(false);
	const flatListRef = useRef();
	const jumpToTop = () => {
		flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
	};
	const handleScroll = (event) => {
		const scrollY = event.nativeEvent.contentOffset.y;
		if (scrollY >= 50) setHideHeader(true);
		else setHideHeader(false);
	};
	return (
		<>
			<AppWrapper>
				{hideHeader && <JumpUpButton pressHandler={jumpToTop} />}
				<>
					{!hideHeader && <MainHeader navigation={navigation} />}

					{isLoading && <LoadingDataIndicator />}
				</>
				<ListContainer>
					<RestaurantListView
						ref={flatListRef}
						showsVerticalScrollIndicator={false}
						onScroll={handleScroll}
						scrollEventThrottle={16}
						ListHeaderComponent={() => (
							<>
								{
									<HeaderContent
										variant="body"
										style={{ fontSize: 28, padding: 16 }}
									>
										Discover the perfect dish that matches your cravings!
									</HeaderContent>
								}
							</>
						)}
						data={resturants}
						renderItem={(dataItem) => {
							return (
								<Pressable onPress={handleNavigation.bind(this, dataItem.item)}>
									<Spacer postion={"bottom"} size="large">
										<ResturantInfoCard resturant={dataItem.item} />
									</Spacer>
								</Pressable>
							);
						}}
						keyExtractor={(item) => item.name}
					/>
				</ListContainer>
			</AppWrapper>
		</>
	);
};
