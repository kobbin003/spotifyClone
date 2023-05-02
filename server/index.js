import express from "express";
import crypto from "node:crypto";
import fetch from "node-fetch";
import * as dotenv from "dotenv";
import { fetchData } from "./utils.js";

dotenv.config();
const app = express();
const port = 7000;

const client_id = process.env.VITE_CLIENT_ID;
const redirect_uri = "http://localhost:7000/token";

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.get("/authorize", function (req, res) {
	const state = crypto.randomBytes(16).toString("hex");
	const scope = "user-read-private user-read-email";

	const searchParams = new URLSearchParams({
		response_type: "code",
		client_id,
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
	const queryParams = new URLSearchParams({
		code,
		redirect_uri,
		grant_type: "authorization_code",
	});

	const data = await fetchData("POST", queryParams);
	console.log("token", data);
	res.send(data);
});

app.get("/refreshToken", async (req, res) => {
	const refreshToken = req.query.refreshToken;

	const queryParams = new URLSearchParams({
		grant_type: "refresh_token",
		refresh_token: refreshToken,
	});
	const data = await fetchData("POST", queryParams);
	console.log("refreshtoken", data);
	res.send(data);
});

app.listen(port, () => {
	console.log(`server running on ${port}`);
});
