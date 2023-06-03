import React from "react";
// import styled from "styled-components";
import {
	Icon,
	LogoHeader,
	Section,
	UnorderedList,
	Footer,
	FooterSection,
	Language,
	FooterContainer,
	Container,
} from "./style";
import { Link } from "react-router-dom";

const SideBar = () => {
	// const browserheight = window.innerHeight;
	// const screenheight = screen.height;
	// const screenwidth = screen.width;
	// console.log(browserheight, screenheight, screenwidth);
	return (
		// <Button primary="#007bff">Primary Button</Button>
		<Container>
			<div>
				<LogoHeader>
					<Icon
						src="/icons/spotify.svg"
						spotify
					></Icon>
					<span>Spotify</span>
				</LogoHeader>
				<Section>
					<UnorderedList>
						<li>
							<Icon src="/icons/home.svg"></Icon>
							<Link to="/">
								Home
								{/* <a href="">Home</a> */}
							</Link>
						</li>
						<li>
							<Icon src="/icons/search.svg"></Icon>
							<Link to="/search/artist">Search</Link>
						</li>
						<li>
							<Icon src="/icons/library.svg"></Icon>
							<button type="button">Your Library</button>
						</li>
						<li>
							<Icon
								src="/icons/add-playlist.svg"
								big
							></Icon>
							<button type="button">Create Playlist</button>
						</li>
						<li>
							<Icon
								src="/icons/heartsquare.svg"
								big
							></Icon>
							<button type="button">Liked songs</button>
						</li>
					</UnorderedList>
				</Section>
			</div>
			<FooterContainer>
				<Footer>
					<UnorderedList>
						<FooterSection>
							<li>
								<a href="">Legal</a>
							</li>
							<li>
								<a href="">Privacy Center</a>
							</li>
						</FooterSection>
						<FooterSection>
							<li>
								<a href="">Privacy Policy</a>
							</li>
							<li>
								<a href="">Cookies</a>
							</li>
							<li>
								<a href="">About Ads</a>
							</li>
						</FooterSection>
						<FooterSection>
							<li>
								<a href="">Cookies</a>
							</li>
						</FooterSection>
					</UnorderedList>
				</Footer>
				<Language>
					<button>
						<Icon
							src="/icons/globe.svg"
							globe
						/>
						<span>English</span>
					</button>
				</Language>
			</FooterContainer>
		</Container>
	);
};

export default SideBar;
