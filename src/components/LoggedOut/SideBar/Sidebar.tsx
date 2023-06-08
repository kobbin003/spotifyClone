import React, { useEffect, useState } from "react";
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

const SideBar = ({
	setTop,
	setLeft,
	setVisibility,
}: {
	setTop: React.Dispatch<React.SetStateAction<number>>;
	setLeft: React.Dispatch<React.SetStateAction<number>>;
	setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const [element, setElement] = useState<HTMLElement>();
	const [outsideElement, setOutsideElement] = useState<HTMLElement>();
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const target = e.target as HTMLElement;
		const clientDimension = target.getBoundingClientRect();
		// console.log(clientDimension);
		setLeft(clientDimension.left + clientDimension.width);
		setTop(clientDimension.top - clientDimension.height * 2);

		setTimeout(() => {
			console.log("setting true");
			setVisibility(true);
		}, 10);

		setElement(e.currentTarget);
		// console.log("element", element);
	};
	useEffect(() => {
		const handleClickedOutside = (e: any) => {
			// console.log("clicked", e.target);
			setOutsideElement(e.target);
		};
		document.addEventListener("click", handleClickedOutside);
		return () => document.removeEventListener("click", handleClickedOutside);
	}, []);
	useEffect(() => {
		console.log("element change", element, outsideElement);
		if (element !== outsideElement) {
			console.log("setting false");
			setVisibility(false);
		}
	}, [element, outsideElement]);

	return (
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
							<button
								type="button"
								onClick={handleClick}
							>
								Search
							</button>
						</li>
						<li>
							<Icon src="/icons/library.svg"></Icon>
							<button
								type="button"
								onClick={handleClick}
							>
								Your Library
							</button>
						</li>
						<li>
							<Icon
								src="/icons/add-playlist.svg"
								big
							></Icon>
							<button
								type="button"
								onClick={handleClick}
							>
								Create Playlist
							</button>
						</li>
						<li>
							<Icon
								src="/icons/heartsquare.svg"
								big
							></Icon>
							<button
								type="button"
								onClick={handleClick}
							>
								Liked songs
							</button>
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
