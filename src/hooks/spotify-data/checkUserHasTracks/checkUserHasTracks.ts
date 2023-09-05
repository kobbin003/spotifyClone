const checkUserHasTracks = (
	url: string,
	method: string,
	accessToken: string,
	setAccessToken: React.Dispatch<React.SetStateAction<string>>,
	callback: (
		data: boolean[] | null,
		error: { status: number; message: string } | null
	) => void
) => {
	// console.log("CHECK TRACK CONTAINS");
	const params = new URL(url).searchParams;
	const hasIdsQueries = params.get("ids") && true;
	// console.log(params.get("type"), params.get("ids"));
	const options = {
		method,
		headers: {
			"Content-Type": "Application/json",
			Authorization: `Bearer ${accessToken}`,
		},
	};
	if (accessToken && hasIdsQueries) {
		// console.log(url.split("?")[1].split("=")[1]);
		// console.log("accesstoken-fetchdata");
		fetch(url, options)
			.then((response) => {
				// if (response.ok) {
				return response.json();
				// }
			})
			.then((data) => {
				// console.log("checkdata", data.error);
				if (data.error) {
					callback(null, data.error);
				} else {
					callback(data, null);
				}
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
					// set access token so that fetch is re-performed with the "renewed" token
					setAccessToken(res?.access_token);
				} else {
					// console.log("token not expired");
				}
			})
			.catch((err) => {
				// setIsLoading(false);
				// setError(err);
				// errorfetched = error;
				// callback("hi");
			});
	}
};

export default checkUserHasTracks;
