import {
	HeaderContainer,
	HeaderContent,
	SubHeadingContent,
} from "./header.styles";
import { Spacer } from "../../../../components/spacer/spacer.component";
export const AuthHeader = () => {
	return (
		<HeaderContainer>
			<HeaderContent variant="body">
				One cannot think well, love well, sleep well, if one has not dined
				well.
			</HeaderContent>
			<Spacer postion={"top"} size={"large"} />
			<SubHeadingContent variant="body">
				Let food be thy medicine and medicine be thy food.
			</SubHeadingContent>
		</HeaderContainer>
	);
};
