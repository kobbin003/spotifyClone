import express from "express";
import crypto from "node:crypto";
import fetch from "node-fetch";
import * as dotenv from "dotenv";
dotenv.config();
const app = express();
const port = 7000;

// const client_id = "2097caa6e29d4df4843e72a72cf5c97d";
const client_id = process.env.VITE_CLIENT_ID;
const client_secret = process.env.VITE_CLIENT_SECRET;
const redirect_uri = "http://localhost:7000/token";

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.get("/authorize", function (req, res) {
	const state = crypto.randomBytes(16).toString("hex");
	const scope = "user-read-private user-read-email";

	const searchParams = new URLSearchParams({
		response_type: "code",
		client_id: "8e031ce1d9fb4b2987d6a2217fc5501a",
		scope,
		redirect_uri,
		state,
	});
	res.redirect("https://accounts.spotify.com/authorize?" + searchParams);
	// console.log(searchParams);
});
// the authorise sends the code & state as params in the callback route(i.e /token).
app.get("/token", async (req, res) => {
	const code = req.query.code;
	const payload = client_id + ":" + client_secret;
	const encodedPayload = Buffer.from(payload).toString("base64");
	const searchParams = new URLSearchParams({
		client_id,
		client_secret,
		code,
		redirect_uri,
		grant_type: "authorization_code",
	});
	const url = `https://accounts.spotify.com/api/token?${searchParams}`;

	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			// Authorization: `Basic${encodedPayload}`,
		},
		json: true,
	};
	const result = await fetch(url, options);
	const data = await result.json();
	console.log("data", data);
	console.log("token route");
});
app.listen(port, () => {
	console.log(`server running on ${port}`);
});
