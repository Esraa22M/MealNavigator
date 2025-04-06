import {
	MainHeaderContainer,
	MainHeaderOuterContainer,
} from "./main-header.styles";
import { Ionicons } from "@expo/vector-icons";
export const MainHeader = () => {
	return (
		<MainHeaderOuterContainer>
			<MainHeaderContainer>
				<IconWrapper>
					<Ionicons
						name="search-circle-sharp"
"
					/>
				</IconWrapper>
			</MainHeaderContainer>
		</MainHeaderOuterContainer>
	);
};
