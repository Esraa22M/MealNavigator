import {
	AccountBackground,
	AccountContainer,
	Row,
	AccountCover,
	HeaderWrapper,
	ContentWrapper,
} from "./account.styles";
import { colors } from "../../../../infastructure/theme/colors";
import { SimpleLineIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { AuthButton } from "./Auth-button.components";
import { Header } from "../../components/header/header.components";
import AppButton from "../../../../ui/custom-button/custom-button.components";
export const MainScreen = ({ navigation }) => {
	return (
		<AccountBackground
			source={require("../../../../../assets/bg-images/wallpaper7.jpg")}
		>
			<Row>
				<AccountCover />
				<HeaderWrapper>
					<Header />
				</HeaderWrapper>
				<ContentWrapper>
					<AccountContainer>
						<AuthButton
							title="Login"
							iconName={"login"}
							IconPackage={SimpleLineIcons}
							onPress={() => navigation.navigate("Login")}
							textColor={colors.brand.secondary}
						/>
						<Spacer postion={"top"} size="large" />

						<AppButton
							title="Register"
							iconName={"account-arrow-right-outline"}
							IconPackage={MaterialCommunityIcons}
							textColor={colors.brand.secondary}
						/>
					</AccountContainer>
				</ContentWrapper>
			</Row>
		</AccountBackground>
	);
};
