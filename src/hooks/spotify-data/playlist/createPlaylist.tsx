const createPlaylist = (
	url: string,
	method: string,
	body: {
		name: string;
		description: string;
		public: boolean;
	},
	accessToken: string,
	setAccessToken: React.Dispatch<React.SetStateAction<string>>,
	callback?: () => void
) => {
	let datafetched;
	// let errorfetched;
	const options = {
		method,
		headers: {
			"Content-Type": "Application/json",
			Authorization: `Bearer ${accessToken}`,
		},
		body: JSON.stringify(body),
	};
	if (accessToken) {
		// console.log("accesstoken-fetchdata");
		fetch(url, options)
			.then((response) => {
				if (response.ok) {
					return response.text();
				} else {
					// console.log("puData", response.status, response);
					return response.json();
				}
			})
			.then((data) => {
				// console.log(response.status);
				if (callback) {
					callback();
				}
				// console.log("putedata", data);
				return data;
			})
			.then((res) => {
				if (res === ("The access token expired" || "Invalid access token")) {
					// console.log("putData: access token expired");
					//! USE refresh token to get a new access_token
					const client_id = import.meta.env.VITE_CLIENT_ID;
					const client_secret = import.meta.env.VITE_CLIENT_SECRET;
					const payload = client_id + ":" + client_secret;
					const encodedPayload = window.btoa(payload);
					let queryParams = new URLSearchParams();
					const refreshToken = localStorage.getItem("refreshToken");
					queryParams.set("grant_type", "refresh_token");
					queryParams.set("refresh_token", refreshToken || "");
					const url = `https://accounts.spotify.com/api/token?${queryParams}`;
					const options = {
						method: "POST",
						headers: {
							"Content-Type": "application/x-www-form-urlencoded",
							Authorization: `Basic ${encodedPayload}`,
						},
						json: true,
					};

					return fetch(url, options);
				}
			})
			.then((res) => res?.json())
			.then((res) => {
				if (res) {
					localStorage.setItem("accessToken", res?.access_token);
					// set acces token ao that fetch is re-performed with the "renewed" token
					setAccessToken(res?.access_token);
				} else {
					// console.log("token not expired");
				}
			})
			.catch((err) => {
				// setIsLoading(false);
				// setError(err);
				// errorfetched = error;
				console.log(err);
			});
	}
	// return { datafetched, errorfetched };
};

export default createPlaylist;
