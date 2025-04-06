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
			</HeaderContent>
			<SubHeadingContent variant="body">
            One cannot think well, love well, sleep well, if one has not dined
				well.

				Let food be thy medicine and medicine be thy food.
			</SubHeadingContent>
		</HeaderContainer>
	);
};
