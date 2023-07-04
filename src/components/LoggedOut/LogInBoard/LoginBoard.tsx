import React, { MouseEvent } from "react";
import { Content } from "./style";
import { authorize } from "../../../utils/authorize";

const LoginBoard = () => {
	const handleLogin = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		authorize();
	};
	return (
		<Content>
			<div>
				<h1>Welcome to the Spotify Clone!</h1>
				<h2>Login to your Spotify Account</h2>
				<a onClick={handleLogin}>Log In</a>
				<div>
					<p>Don't have a spotify account?&nbsp;</p>
					<a href="https://www.spotify.com/us/signup?forward_url=https%3A%2F%2Fopen.spotify.com%2F%23_%3D_">
						Sign Up for Spotify
					</a>
				</div>
			</div>

			{/* <Outlet context={["", 0, 0]} /> */}
		</Content>
	);
};

export default LoginBoard;
