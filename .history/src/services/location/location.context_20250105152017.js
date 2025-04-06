import React, { useState, createContext, useEffect } from "react";
import { locationRequest, locationTransform } from "./location.services";
export const LocationContext = createContext();
export const LocationContextProvider = ({ children }) => {
	 const [keyWord, setKeyWord] = useState("san francisco");
	 const [searchTerm, setSearchTerm]= useState("san francisco")

	const [location, setLocation] = useState(null);
	const [isLoadingL, setIsLoadingL] = useState(false);
	const [error, setError] = useState(null);
	const onSearch = () => {
		if (searchTerm.length === 0) return;
		setIsLoadingL(true);
       console.log(searchTerm)
		locationRequest(searchTerm.toLowerCase().trim())
			.then(locationTransform)
			.then((result) => {
				setIsLoadingL(true);
				setLocation(result);
				setIsLoadingL(false);
			})
			.catch((err) => setError(err));
	};
	useEffect(() => {
		onSearch(keyWord);
	}, [searchTerm]);
	return (
		<LocationContext.Provider
			value={{
				keyWord,
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
