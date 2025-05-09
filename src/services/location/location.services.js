import camelize from "camelize";
import { locations } from "./location.data";
export const locationRequest = (searchTerm) => {
	return new Promise((resolve, reject) => {
		const locationData = locations[searchTerm];
		if (!locationData) reject("Not found!!");
		resolve(locationData);
	});
};
export const locationTransform = (result) => {
    const formattedResponse = camelize(result);
	const { geometry={} } = formattedResponse?.results[0];
    const {lng , lat } = geometry?.location;
    return {lng , lat, viewport:geometry?.viewport};
};
