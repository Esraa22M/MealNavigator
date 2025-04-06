import { TextInput } from "react-native-paper";
import { AuthInput } from "../../screens/account/account.styles";
export const AuthInputComponent = ({
	label,
	keyName,
	secureTextEntry=false,
	handleInputChange,
	validateInput,
    keyboardType="",
    isValidInputData,
    inputData,
    textContentType="",
	mode
}) => {
	console.log(isValidInputData[keyName], keyName)
	return (
		<AuthInput
			styleColor={isValidInputData[keyName].iconColor}
			value={inputData[keyName].value}
			autoCapitalize="none"
            textContentType={textContentType}
            textColor="black"
			onFocus={() => {
				handleInputChange(keyName, "isFocused", true,mode);
			}}
			right={
				<TextInput.Icon
					icon={isValidInputData[keyName].icon}
					color={isValidInputData[keyName].iconColor}
				/>
			}
            keyboardType={keyboardType}
			onBlur={() => {
				handleInputChange(keyName, "isFocused", false,mode);
				validateInput(keyName, inputData[keyName].value,mode);
			}}
			onChangeText={handleInputChange.bind(this, keyName, "value",mode)}
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
