type INITIALSTATE = { name: string; active: boolean }[];
type ACTIONTYPE = { type: string; payload: { name: string } };

// export const initialState = [
// 	{ name: "playlists", active: true },
// 	{ name: "albums", active: false },
// 	{ name: "artists", active: false },
// ];
export const reducer = (state: INITIALSTATE, action: ACTIONTYPE) => {
	switch (action.type) {
		case "ACTIVATE":
			return state.map((item) => {
				if (item.name == action.payload.name) {
					return { ...item, active: true };
				} else return { ...item, active: false };
			});
		default:
			return state;
	}
};
