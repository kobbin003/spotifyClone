import express from "express";
import crypto from "node:crypto";
const app = express();
const port = 7000;

app.get("/", (req, res) => {
	res.send("Hello World");
});
const client_id = "2097caa6e29d4df4843e72a72cf5c97d";
const redirect_uri = "http://localhost:7000";

app.get("/login", function (req, res) {
	const state = crypto.randomBytes(16).toString("hex");
	const scope = "user-read-private user-read-email";

	const searchParams = new URLSearchParams({
		response_type: "code",
		client_id: "8e031ce1d9fb4b2987d6a2217fc5501a",
		scope,
		redirect_uri,
		// state,
	});
	res.redirect("https://accounts.spotify.com/authorize?" + searchParams);
	console.log(searchParams);
	// const redirectedUrlParams = new URLSearchParams(window.location.search);
	// const code = redirectedUrlParams.get("code");
	// res.send(code);
});
app.listen(port, () => {
	console.log(`server running on ${port}`);
});
