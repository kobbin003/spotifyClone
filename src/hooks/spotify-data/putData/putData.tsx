const putData = (
	url: string,
	method: string,
	body: { ids: string[] },
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
		console.log("accesstoken-fetchdata");
		fetch(url, options)
			.then((response) => {
				if (response.ok) {
					console.log(response.status);
					if (callback) {
						callback();
					}
					return response.text();
				} else {
					console.log(response);
				}
			})
			.then((data) => {
				console.log("putedata", data);
				return data;
			})
			.then((res) => {
				if (res === ("The access token expired" || "Invalid access token")) {
					console.log("putData: access token expired");
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
					console.log("token not expired");
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

export default putData;

// const putData = <T, U extends {}>(
// 	url: string,
// 	method: string,
// 	body: { ids: string[] },
// 	accessToken: string,
// 	setAccessToken: React.Dispatch<React.SetStateAction<string>>
// ): FetchDataState<T, U> => {
// 	const [data, setData] = useState<T | null>();
// 	const [isLoading, setIsLoading] = useState<boolean>(false);
// 	const [error, setError] = useState<U | null>();

// 	setIsLoading(true);
// 	const options = {
// 		method,
// 		headers: {
// 			"Content-Type": "Application/json",
// 			Authorization: `Bearer ${accessToken}`,
// 		},
// 		body: JSON.stringify(body),
// 	};
// 	if (accessToken) {
// 		console.log("accesstoken-fetchdata");
// 		fetch(url, options)
// 			.then((response) => {
// 				return response.json();
// 			})
// 			.then((data) => {
// 				//* setError IF data has error
// 				if (data.error) {
// 					setError(data.error);
// 					setIsLoading(false);
// 					return data.error.message;
// 				} else {
// 					setData(data);
// 					setError(null);
// 					setIsLoading(false);
// 				}
// 			})
// 			.then((res) => {
// 				if (res === ("The access token expired" || "Invalid access token")) {
// 					console.log("putData: access token expired");
// 					//! USE refresh token to get a new access_token
// 					const client_id = import.meta.env.VITE_CLIENT_ID;
// 					const client_secret = import.meta.env.VITE_CLIENT_SECRET;
// 					const payload = client_id + ":" + client_secret;
// 					const encodedPayload = window.btoa(payload);
// 					let queryParams = new URLSearchParams();
// 					const refreshToken = localStorage.getItem("refreshToken");
// 					queryParams.set("grant_type", "refresh_token");
// 					queryParams.set("refresh_token", refreshToken || "");
// 					const url = `https://accounts.spotify.com/api/token?${queryParams}`;
// 					const options = {
// 						method: "POST",
// 						headers: {
// 							"Content-Type": "application/x-www-form-urlencoded",
// 							Authorization: `Basic ${encodedPayload}`,
// 						},
// 						json: true,
// 					};

// 					return fetch(url, options);
// 				}
// 			})
// 			.then((res) => res?.json())
// 			.then((res) => {
// 				if (res) {
// 					localStorage.setItem("accessToken", res?.access_token);
// 					// set acces token ao that fetch is re-performed with the "renewed" token
// 					setAccessToken(res?.access_token);
// 				} else {
// 					console.log("token not expired");
// 				}
// 			})
// 			.catch((err) => {
// 				setIsLoading(false);
// 				setError(err);
// 			});
// 	}
// 	return {
// 		data: data !== undefined ? data : null,
// 		error: error !== undefined ? error : null,
// 		isLoading,
// 	};
// };

// export default putData;
