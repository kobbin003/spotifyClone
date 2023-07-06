export const authorize = () => {
	const client_id = import.meta.env.VITE_CLIENT_ID;
	// const state = crypto.randomBytes(16).toString("hex");
	const state = generateCodeVerifier(16);
	const scope =
		"user-read-private user-read-email user-library-read user-library-modify user-read-recently-played user-top-read user-read-playback-position user-follow-read user-follow-modify playlist-modify-public playlist-modify-private playlist-read-collaborative playlist-read-private user-modify-playback-state user-read-currently-playing user-read-playback-state ugc-image-upload";

	const redirect_uri = "http://localhost:5173/callback";
	const searchParams = new URLSearchParams({
		response_type: "code",
		client_id,
		redirect_uri,
		scope,
		state,
	});
	// window.location.href =
	// 	"https://accounts.spotify.com/authorize?" + searchParams;
	return "https://accounts.spotify.com/authorize?" + searchParams;
};
export const authorizeFromBackEnd = () => {
	/* //! Cannot work around the CORS problem */
	console.log("auth from back");
	const url = "http://localhost:7000/authorize";
	fetch(url)
		.then((res) => res.json())
		.then((data) => console.log(data));
};

function generateCodeVerifier(length: number) {
	let text = "";
	let possible =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for (let i = 0; i < length; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
}
