import React from "react";
import styled from "styled-components";

const Button = styled.button`
	background: transparent;
	border-radius: 3px;
	border: 2px solid palevioletred;
	color: palevioletred;
	margin: 0 1em;
	padding: 0.25em 1em;
`;
const SideBar = styled.div`
	position: absolute;
	height: 100vh;
	width: 20wh;
	left: 0;
	top: 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-evenly;
	background: #000000;
`;
const UnorderedList = styled.ul`
	list-style: none;
`;
const Sidebar = () => {
	return (
		<SideBar>
			<section>Logo</section>
			<section>
				<UnorderedList>
					<li>
						<Button>Home</Button>
					</li>
					<li>Search</li>
					<li>Your Library</li>
				</UnorderedList>
			</section>
			<section>
				<UnorderedList>
					<li>Create Playlist</li>
					<li>Liked songs</li>
				</UnorderedList>
			</section>
			<section>
				<UnorderedList>
					<li>Legal</li>
					<li>Privacy Center</li>
					<li>Privacy Policy</li>
					<li>Cookies</li>
					<li>About Ads</li>
					<li>Cookies</li>
				</UnorderedList>
			</section>
		</SideBar>
	);
};

export default Sidebar;
