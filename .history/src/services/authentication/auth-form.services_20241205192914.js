export const emailValidation = (email) => {
	let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	let isValid = email.match(emailRegex);
	if (isValid) return true;
	return false;
};
function checkpassword(password) {
	const passwordValidatinData = { displayValue: "", strengthbar: 0 };
	var strength = 0;
	let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;

	let isValid = password.match(
		/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])((?=.*\W)|(?=.*_))^[^ ]+$/
	);

	return isValid;
}
