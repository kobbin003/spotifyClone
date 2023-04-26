import React from "react";
// import styled from "styled-components";
import {
	SideBar,
	Icon,
	LogoHeader,
	Section,
	UnorderedList,
	Footer,
	FooterSection,
	Language,
	FooterContainer,
} from "./style";

const Sidebar = () => {
	return (
		// <Button primary="#007bff">Primary Button</Button>

		<SideBar>
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
						<span>Home</span>
					</li>
					<li>
						<Icon src="/icons/search.svg"></Icon>
						<span>Search</span>
					</li>
					<li>
						<Icon src="/icons/library.svg"></Icon>
						<span>Your Library</span>
					</li>
					<li>
						<Icon src="/icons/add-playlist.svg"></Icon>
						<span>Create Playlist</span>
					</li>
					<li>
						<Icon src="/icons/heartsquare.svg"></Icon>
						<span>Liked songs</span>
					</li>
				</UnorderedList>
			</Section>
			<FooterContainer>
				<Footer>
					<UnorderedList>
						<FooterSection>
							<li>
								<span>Legal</span>
							</li>
							<li>
								<span>Privacy Center</span>
							</li>
						</FooterSection>
						<FooterSection>
							<li>
								<span>Privacy Policy</span>
							</li>
							<li>
								<span>Cookies</span>
							</li>
							<li>
								<span>About Ads</span>
							</li>
						</FooterSection>
						<FooterSection>
							<li>
								<span>Cookies</span>
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
		</SideBar>
	);
};

export default Sidebar;
