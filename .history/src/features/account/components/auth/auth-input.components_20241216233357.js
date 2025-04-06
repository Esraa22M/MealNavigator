import { TextInput } from "react-native-paper";
import { AuthInput } from "../../screens/account/account.styles";
export const AuthInputComponent = ({
	label,
	secureTextEntry,
	handleLoginDataChange,
	validateInput,
    keyboardType,
    isValidLoginData,
    loginData
}) => {
	return (
		<AuthInput
			styleColor={isValidLoginData[label].iconColor}
			value={loginData[label].value}
			autoCapitalize="none"
			onFocus={() => {
				handleLoginDataChange(label, "isFocused", true);
			}}
			right={
				<TextInput.Icon
					icon={isValidLoginData[label].icon}
					color={isValidLoginData[label].iconColor}
				/>
			}
			onBlur={() => {
				handleLoginDataChange(label, "isFocused", false);
				validateInput(label, loginData[label].value);
			}}
			onChangeText={handleLoginDataChange.bind(this, label, "value")}
			label={
				loginData[label].isFocused ||
				isValidLoginData[label].isValid ||
				loginData[label].value
					? ""
					: label
			}
            keyboardType={keyboardType}
			placeholder={`Enter your ${label}`}
			secureTextEntry={secureTextEntry}
		/>
	);
};
