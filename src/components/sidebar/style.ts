import styled from "styled-components";

type IconProp = {
	readonly spotify?: boolean;
	readonly globe?: boolean;
};

export const Icon = styled.img<IconProp>`
	height: ${(props) => {
		if (props.spotify) {
			return "1.5em";
		} else if (props.globe) {
			return "1.1em";
		} else return "1.6em";
	}};
	width: ${(props) => {
		if (props.spotify) {
			return "1.5em";
		} else if (props.globe) {
			return "1.1em";
		} else return "1.6em";
	}};
	padding-right: ${(props) => (props.spotify ? "0.2em" : "0.9em")};
`;
export const SideBar = styled.div`
	position: relative;
	height: 100vh;
	width: 250px;
	/* left: 0;
	top: 0; */
	grid-column: 1/2;
	grid-row: 1/4;
	background: #000000;
	line-height: 1.7rem;
	color: #d3d3d3;
	& > * {
		padding-left: 1.3rem;
	}
`;
export const LogoHeader = styled.section`
	font-size: 1.3rem;
	font-weight: 700;
	padding-top: 0.9em;
	padding-bottom: 1.2em;
	display: flex;
	align-items: center;
	color: #ffffff;
`;
export const UnorderedList = styled.ul`
	list-style: none;
	/* padding-left: 20px;  */
`;
export const Section = styled.section`
	font-size: 0.8rem;
	font-weight: 600;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	/** align center the icon and title */
	& li {
		display: flex;
		align-items: center;
		padding-bottom: 0.6em;
	}
	& li:nth-child(3) {
		padding-bottom: 1.7em;
	}
	& li > span {
		display: inline-block;
		transform: scale(0.9);
		transform-origin: top left;
	}
	/** for all li change the span on hover */
	& li:hover {
		cursor: pointer;
		& span {
			color: #ffffff;
			transition: color 0.1s ease-in-out;
		}
	}
	/** for 4th and 5th change both the span and img on hover */
	& li:nth-child(n + 4):nth-child(-n + 5):hover {
		& img {
			filter: brightness(150%);
			transition: filter 0.1s ease-in-out;
		}
	}
`;
export const Footer = styled.footer`
	font-weight: 500;
`;
export const FooterSection = styled.div`
	font-size: 0.8rem;
	display: flex;
	/* font-weight: 400; */
	/* justify-content: space-between; */
	& li > span {
		display: inline-block;
		transform: scale(0.75);
		transform-origin: center left;
	}
`;

export const Language = styled.div`
	& button {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		background-color: black;
		color: #ffffff;
		border: none;
		border: 0.3px solid white;
		border-radius: 1em;
		padding: 0.2em 0.5em;
		& img {
			padding-right: 0;
		}
		& span {
			font-size: 0.3em;
			font-weight: 600;
		}
	}
`;
export const FooterContainer = styled.div`
	position: absolute;
	bottom: 0;
	padding-bottom: 6em;
	& > *:nth-child(2) {
		padding-top: 1em;
	}
	@media screen and (max-width: 786px) {
		padding-bottom: 7em;
	}
`;
