import express from "express";
import crypto from "node:crypto";
import fetch from "node-fetch";
import * as dotenv from "dotenv";
import { fetchData } from "./utils/fetchData.js";
import { fetchToken } from "./utils/fetchToken.js";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { getTopSearch } from "./utils/getTopSearch.js";

const app = express();
const port = 7000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, ".env") });

const client_id = process.env.CLIENT_ID;
// const client_secret = process.env.CLIENT_SECRET;

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
	const data = await fetchToken("POST", queryParams);
	console.log("token", data);
	res.send(data);
});

app.get("/refreshToken", async (req, res) => {
	const refreshToken = req.query.refreshToken;

	const queryParams = new URLSearchParams({
		grant_type: "refresh_token",
		refresh_token: refreshToken,
	});

	const data = await fetchToken("POST", queryParams);
	console.log("refreshtoken", data);
	res.send(data);
});
app.get("/topsearch", async (req, res) => {
	const { q, type, limit = 10, offset = 0 } = req.query;
	const queryParams = new URLSearchParams({
		q,
		type,
		limit,
		offset,
	});
	const url = `https://api.spotify.com/v1/search?${queryParams}`;
	const data = await fetchData("GET", url);
	const topItem = getTopSearch(data);
	res.send(topItem);
});
app.listen(port, () => {
	console.log(`server running on ${port}`);
});
