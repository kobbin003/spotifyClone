import * as dotenv from "dotenv";
dotenv.config();

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

export const fetchToken = async (method, queryParams) => {
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
	try {
		const result = await fetch(url, options);
		const data = await result.json();
		return data;
	} catch (error) {
		return error;
	}
};
