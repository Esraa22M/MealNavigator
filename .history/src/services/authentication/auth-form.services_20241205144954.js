export const emailValidation = (email) => {
	let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let isValid = email.match(emailRegex);
    return isValid;

};
