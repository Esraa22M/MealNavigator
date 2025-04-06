import { TextInput } from "react-native-paper";
import { AuthInput } from "../../screens/account/account.styles";
export const AuthInputComponent = ({
	label,
	keyName,
	secureTextEntry = false,
	handleInputChange,
	validateInput,
	keyboardType = "",
	isValidInputData,
	inputData,
	setHidePassword,
	hidePassword,
	pressHandler,
	textContentType = "",
	setKeyboardVisible,
	mode,
}) => {
	return (
		<AuthInput
			styleColor={isValidInputData[keyName].iconColor}
			value={inputData[keyName].value}
			autoCapitalize="none"
			textContentType={textContentType}
			textColor="black"
			onFocus={() => {
				setKeyboardVisible(true);
				handleInputChange(mode, keyName, "isFocused", true);
			}}
			right={
				<TextInput.Icon
					icon={isValidInputData[keyName].icon}
					color={isValidInputData[keyName].iconColor}
				/>
			}
			keyboardType={keyboardType}
			onBlur={() => {
				setKeyboardVisible(false);

				handleInputChange(mode, keyName, "isFocused", false);
				validateInput(mode, keyName, inputData[keyName].value);
			}}
			onChangeText={handleInputChange.bind(this, mode, keyName, "value")}
			label={
				inputData[keyName].isFocused ||
				isValidInputData[keyName].isValid ||
				inputData[keyName].value
					? ""
					: label
			}
			placeholder={`Enter your ${label}`}
			secureTextEntry={secureTextEntry}
		/>
	);
};
