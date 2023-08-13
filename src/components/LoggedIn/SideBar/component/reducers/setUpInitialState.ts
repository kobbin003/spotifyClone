export const setUpInitialState = (pathName: string) => {
	const names: { [key: string]: string } = {
		playlist: "playlists",
		album: "albums",
		artist: "artists",
	};
	const defaultState = [
		{ name: "playlists", active: true },
		{ name: "albums", active: false },
		{ name: "artists", active: false },
	];
	const initialState = pathName
		? Object.keys(names).map((name) => ({
				name: names[name],
				active: name == pathName,
		  }))
		: defaultState;
	return initialState;
};
