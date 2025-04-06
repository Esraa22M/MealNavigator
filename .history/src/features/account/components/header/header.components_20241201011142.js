import {
	HeaderContainer,
	HeaderContent,
	SubHeadingContent,
} from "./header.styles";
import { Spacer } from "../../../../components/spacer/spacer.component";
export const Header = () => {
	return (
		<HeaderContainer>
			<HeaderContent variant="body">Meal Navigator</HeaderContent>
			<Spacer postion={"top"} size={"large"}/>
			<SubHeadingContent variant="body">
				Let food be thy medicine and medicine be thy food.
			</SubHeadingContent>
		</HeaderContainer>
	);
};
