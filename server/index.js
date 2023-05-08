import express from "express";
import cors from "cors";
import crypto from "node:crypto";
import { createProxyMiddleware } from "http-proxy-middleware";
import * as dotenv from "dotenv";
import { fetchData } from "./utils/fetchData.js";
import { fetchToken } from "./utils/fetchToken.js";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { getTopSearch } from "./utils/getTopSearch.js";

const app = express();
// app.use(cors());
// app.use(
// 	"/api",
// 	createProxyMiddleware({ target: "http://localhost:7000", changeOrigin: true })
// );
// const proxy = createProxyMiddleware({
// 	target: "https://accounts.spotify.com",
// 	changeOrigin: true,
// });
const port = 7000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, ".env") });

const client_id = process.env.CLIENT_ID;
// const client_secret = process.env.CLIENT_SECRET;

app.get("/", (req, res) => {
	res.send("Hello World");
});

const redirect_uri = "http://localhost:5173/token";

app.get("/authorize", function (req, res) {
	const state = crypto.randomBytes(16).toString("hex");
	const scope =
		"user-read-private user-read-email user-library-read user-library-modify user-read-recently-played user-top-read user-read-playback-position user-follow-read user-follow-modify playlist-modify-public playlist-modify-private playlist-read-collaborative playlist-read-private user-modify-playback-state user-read-currently-playing user-read-playback-state ugc-image-upload";

	const searchParams = new URLSearchParams({
		response_type: "code",
		client_id,
		redirect_uri,
		scope,
		state,
	});
	const requestReceivedFrom = req.headers.origin;

	// console.log(requestReceivedFrom, req.headers);
	res.set("Access-Control-Allow-Origin", "*");
	res.redirect("https://accounts.spotify.com/authorize?" + searchParams);
	// res.send({ mas: "hello" });
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
	res.set("Access-Control-Allow-Origin", "http://localhost:5173");
	res.send(data);
	// res.send({ code });
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
