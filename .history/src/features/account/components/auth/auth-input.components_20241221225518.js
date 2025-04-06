import { TextInput } from "react-native-paper";
import { AuthInput } from "../../screens/account/account.styles";
export const AuthInputComponent = ({
	label,
	key,
	secureTextEntry=false,
	handleInputChange,
	validateInput,
    keyboardType="",
    isValidInputData,
    inputData,
    textContentType=""
}) => {
	console.log(isValidInputData, key)
	return (
		<AuthInput
			styleColor={isValidInputData[key].iconColor}
			value={inputData[key].value}
			autoCapitalize="none"
            textContentType={textContentType}
            textColor="black"
			onFocus={() => {
				handleInputChange(key, "isFocused", true);
			}}
			right={
				<TextInput.Icon
					icon={isValidInputData[key].icon}
					color={isValidInputData[key].iconColor}
				/>
			}
            keyboardType={keyboardType}
			onBlur={() => {
				handleInputChange(key, "isFocused", false);
				validateInput(key, inputData[key].value);
			}}
			onChangeText={handleInputChange.bind(this, key, "value")}
			label={
				inputData[key].isFocused ||
				isValidInputData[key].isValid ||
				inputData[key].value
					? ""
					: label
			}
			placeholder={`Enter your ${label}`}
			secureTextEntry={secureTextEntry}
		/>
	);
};
