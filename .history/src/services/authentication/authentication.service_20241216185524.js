import axios from "axios";
const API_KEY = "AIzaSyA1DPHhWFuuMaNYb1IuA9Tj_xG9doK4Zc0";
const authentication = async (mode, email, password) => {
	const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}
`;
	const response = await axios.post(url, {
		email: email,
		password: password,
		returnSecureToken: true,

	});
	console.log(response)
};

export const createUser = async (email, password) => {
	return authentication("signUp", email, password);
};
export const login = async (email, password) => {
	  authentication("signInWithPassword", email, password);
};

