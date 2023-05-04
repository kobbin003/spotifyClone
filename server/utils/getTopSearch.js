import { data } from "./data.js";
export const getTopSearch = (data) => {
	// const {artist}
	let topPopularity = 0;
	let currentPopular;
	data.artists.items.forEach((item) => {
		if (item.popularity > topPopularity) {
			currentPopular = item;
			topPopularity = item.popularity;
		}
	});
	return currentPopular;
};

const top = getTopSearch(data);
console.log(top);
