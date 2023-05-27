export const getTopSearch = (data: any) => {
	// const {artist}
	let topPopularity = 0;
	let currentPopular;
	data.artists.items.forEach((item: any) => {
		if (item.popularity > topPopularity) {
			currentPopular = item;
			topPopularity = item.popularity;
		}
	});
	return currentPopular;
};
