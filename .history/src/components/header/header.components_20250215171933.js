import {
	HeaderContainer,
	HeaderContent,
	SubHeadingContent,
} from "./header.styles";
import { Spacer } from "../spacer/spacer.component";
import Logo from "../../../assets/bg-images/dish-dinner-svgrepo-com-form.svg";

export const Header = () => {
	return (
		<HeaderContainer>
			<Logo/>
			<HeaderContent variant="body" style={{ fontSize: 35}}>Meal Navigator</HeaderContent>
			<Spacer postion={"top"} size={"large"}/>
			<SubHeadingContent variant="body">
				Let food be thy medicine and medicine be thy food.
			</SubHeadingContent>
		</HeaderContainer>
	);
};
