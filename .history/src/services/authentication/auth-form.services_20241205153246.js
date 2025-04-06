export const emailValidation = (email) => {
	let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	let isValid = email.match(emailRegex);
	if (isValid) return true;
	return false;
};
function checkpassword(password) {
	const passwordValidatinData = { displayValue: "", strengthbar: 0 };
	var strength = 0;

	let isValid = password.match(
		/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}$/
	);

    return isValid;

}
