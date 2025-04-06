import React, { useState, createContext, useEffect } from "react";
import { locationRequest, locationTransform } from "./location.services";
export const LocationContext = createContext();
export const LocationContextProvider = ({ children }) => {

	const [location, setLocation] = useState(null);
	const [isLoadingL, setIsLoadingL] = useState(false);
	const [error, setError] = useState(null);
	const onSearch = (keyWord="") => {
		if (keyWord.length === 0) return;
		setIsLoadingL(true);
		console.log(keyWord);
		locationRequest(keyWord.toLowerCase().trim())
			.then(locationTransform)
			.then((result) => {
				setIsLoadingL(true);
				setLocation(result);
				setIsLoadingL(false);
			})
			.catch((err) => setError(err));
	};
	useEffect(() => {
		onSearch("san francisco");
	}, []);
	return (
		<LocationContext.Provider
			value={{
				location,
				error,
				isLoadingL,
				search: onSearch,
				setKeyWord,
			}}
		>
			{children}
		</LocationContext.Provider>
	);
};
