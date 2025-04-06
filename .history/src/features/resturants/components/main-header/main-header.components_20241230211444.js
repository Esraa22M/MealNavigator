import {
	MainHeaderContainer,
	MainHeaderOuterContainer,
    IconWrapper
} from "./main-header.styles";
import { Ionicons } from "@expo/vector-icons";

export const MainHeader = () => {
	return (
		<MainHeaderOuterContainer>
			<MainHeaderContainer>
				<IconWrapper>
					<Ionicons
						name="search-circle-sharp"
                        color="white"
                        size={50}
					/>
				</IconWrapper>
			</MainHeaderContainer>
		</MainHeaderOuterContainer>
	);
};
