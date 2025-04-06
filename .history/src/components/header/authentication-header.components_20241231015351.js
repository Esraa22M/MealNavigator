import { SubHeadingContent } from "./header.styles";
import { HeaderContent } from "./header.styles";
import { View } from "react-native";
import { Spacer } from "../spacer/spacer.component";
export const AuthHeader = () => {
	return (
		<View>
			<Spacer postion={"top"} size="large"/>
			<HeaderContent variant="body" account>Meal Navigator</HeaderContent>
			<Spacer postion={"top"} size="large"/>

			<SubHeadingContent variant="body" account>
				One cannot think well, love well, sleep well, if one has not dined well.
			</SubHeadingContent>
		</View>
	);
};
