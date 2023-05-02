import * as dotenv from "dotenv";
dotenv.config();

const client_id = process.env.VITE_CLIENT_ID;
const client_secret = process.env.VITE_CLIENT_SECRET;

export const fetchData = async (method, queryParams) => {
	const payload = client_id + ":" + client_secret;
	const encodedPayload = Buffer.from(payload).toString("base64");
	const url = `https://accounts.spotify.com/api/token?${queryParams}`;
	const options = {
		method,
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Authorization: `Basic ${encodedPayload}`,
		},
		json: true,
	};
	const result = await fetch(url, options);
	const data = await result.json();
	return data;
};
