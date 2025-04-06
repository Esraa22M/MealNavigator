export const emailValidation = (email) => {
	let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	let isValid = email.match(emailRegex);
	if (isValid) return true;
	return false;
};
function checkpassword(password) {
	const passwordValidatinData = { displayValue: "", strengthbar: 0 };
	var strength = 0;
	if (password.match(/[a-z]+/)) {
		strength += 1;
	}
	if (password.match(/[A-Z]+/)) {
		strength += 1;
	}
	if (password.match(/[0-9]+/)) {
		strength += 1;
	}
	if (password.match(/[$@#&!]+/)) {
		strength += 1;
	}

	if (password.length < 6) {
		passwordValidatinData.displayValue = "minimum number of characters is 6";
	}

	if (password.length > 12) {
		passwordValidatinData.displayValue = "maximum number of characters is 12";
	}

	switch (strength) {
		case 0:
			passwordValidatinData.strengthbar = 0;
			break;

		case 1:
			passwordValidatinData.strengthbar = 25;
			break;

		case 2:
			passwordValidatinData.strengthbar = 50;
			break;

		case 3:
			passwordValidatinData.strengthbar = 75;
			break;

		case 4:
			passwordValidatinData.strengthbar = 100;
			break;
	}
    return passwordValidatinData;
}
