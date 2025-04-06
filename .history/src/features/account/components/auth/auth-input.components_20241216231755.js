export const AuthInput = ({
	label,
	value,
	secureTextEntry,
	handleLoginDataChange,
	validateInput,
}) => {
	return (
		<AuthInput
			styleColor={isValidLoginData[label].iconColor}
			value={value}
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
			placeholder={`Enter your ${label}`}
			secureTextEntry={secureTextEntry}
		/>
	);
};
