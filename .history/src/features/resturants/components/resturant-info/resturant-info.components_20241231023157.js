import { SvgXml } from "react-native-svg";
import star from "../../../../../assets/icons/star.js";
import open from "../../../../../assets/icons/open.js";
import {
	ResturantCard,
	IconsContainerView,
	RowView,
	Icon,
	CardBody,
	ResturantCardCover,
	Title,
	Address,
	RatingContainer,
} from "./resturant-info.styles.js";
import { Favourite } from "../../../../components/favourites/favourite.components.js";
import { Spacer } from "../../../../components/spacer/spacer.component.js";
import { TextComponent } from "../../../../components/typography/text.components.js";
import { transparent } from "react-native-paper/lib/typescript/styles/themes/v2/colors.js";
export const ResturantInfoCard = ({ resturant = {} }) => {
	const {
		name = "some resturant",
		icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
		photos = [
			"https://media1.popsugar-assets.com/files/thumbor/vIAZ7xK3B0qJKKbVRDN1CX0FVQc=/fit-in/792x651/top/filters:format_auto():upscale()/2018/05/15/548/n/42718227/eb0833315aface08ef8d61.75638390_.jpg",
		],
		address = "some random streat",
		isOpenNow = true,
		rating = 4,
		isClosedTemporarily = true,
	} = resturant;

	let ratingArray = Array.from(new Array(Math.floor(rating)));
	return (
		<ResturantCard
			style={{
				elevation: 0,
				shadowOpacity: 0,
				borderWidth: 0,
				padding: 0,
				shadowOffset: { height: 0, width: 0 },
				shadowRadius: 0//default is 1

			}}
			
		>
			<Spacer postion="bottom" size="large">
				<IconsContainerView>
					<RowView>
						{isClosedTemporarily && (
							<TextComponent variant="error">
								is closed temporarily
							</TextComponent>
						)}
						<Spacer postion="left" size="medium">
							{isOpenNow && <SvgXml xml={open} width={30} height={30} />}
						</Spacer>
					</RowView>
					<RowView>
						<Favourite resturant={resturant} />
						<Icon source={{ uri: icon }} />
					</RowView>
				</IconsContainerView>
			</Spacer>
			<ResturantCardCover source={{ uri: photos[0] }} />
			<CardBody>
				<Title variant="label">{name}</Title>
				<RatingContainer>
					{ratingArray.map((item, index) => (
						<SvgXml xml={star} width={20} height={20} key={index} />
					))}
				</RatingContainer>
				<Address variant="label">{address}</Address>
			</CardBody>
		</ResturantCard>
	);
};
