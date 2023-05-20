import styled from "styled-components";
import { sideBarProps } from "./Sidebar";
export type DraggableProps = {
	widthHandleDragger: number;
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	onMouseMove: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
export const Container = styled.section<{ width: number }>`
	width: ${(prop) => prop.width}rem;
	background-color: var(--black-darkest);
	position: fixed;
	height: 100vh;
	top: 0;
	left: 0;
	z-index: 1;
	display: flex;
	flex-direction: column;
	min-width: 15em;
	max-width: 60vw;
	color: var(--font-grey);
`;

export const DraggableHandle = styled.button<DraggableProps>`
	border: none;
	position: absolute;
	top: 0;
	right: -${(prop) => prop.widthHandleDragger / 2}em;
	width: ${(prop) => prop.widthHandleDragger}em;
	background-color: transparent;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	/* z-index: -5; */
	div:nth-child(1) {
		height: 100%;
		background-color: transparent;
		flex: 1;
	}
	div:nth-child(3) {
		height: 100%;
		flex: 1;
		background-color: transparent;
	}
`;
export const Dragger = styled.div`
	/* background-color: green; */
	opacity: 100%;
	height: 100%;
	width: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: col-resize;
	&:hover {
		div:nth-child(2) {
			opacity: 100%;
		}
	}
	div:nth-child(1) {
		height: 100%;
		background-color: transparent;
		flex: 1;
	}
	div:nth-child(2) {
		height: 100%;
		background-color: white;
		width: 0.5px;
		margin-top: 1em;
		opacity: 0%;
	}
	div:nth-child(3) {
		height: 100%;
		flex: 1;
		background-color: transparent;
	}
`;
type IconProp = {
	readonly spotify?: boolean;
	readonly globe?: boolean;
	readonly big?: boolean;
	readonly small?: boolean;
	readonly noPadding?: boolean;
};

export const Icon = styled.img<IconProp>`
	height: ${(props) => {
		if (props.spotify) {
			return "1.5em";
		} else if (props.globe) {
			return "1.1em";
		} else if (props.big) {
			return "1.8em";
		} else if (props.small) {
			return "10px";
		} else {
			return "1.6em";
		}
	}};
	width: ${(props) => {
		if (props.spotify) {
			return "1.5em";
		} else if (props.globe) {
			return "1.1em";
		} else if (props.big) {
			return "1em";
		} else if (props.small) {
			return "10px";
		} else {
			return "1.6em";
		}
	}};
	padding-right: ${(props) => {
		if (props.spotify) {
			return "0.2em";
		}
		if (props.noPadding) {
			return "0em";
		} else {
			return "0.9em";
		}
	}};
`;
export const UnorderedList = styled.ul`
	list-style: none;
	font-weight: 700;
	font-size: 0.8rem;
	/* padding: 2em; */
	/* padding-left: 20px;  */
	li {
		display: flex;
		align-content: center;
		align-items: center;
		padding: 1em;
		a {
			color: var(--font-grey);
			text-decoration: none;
		}
		&:hover {
			img,
			a {
				filter: brightness(150%);
			}
		}
	}
`;

export const Home = styled.div`
	position: relative;
	height: fit-content;
	background-color: var(--black-dark);
	border: 1px solid var(--black-dark);
	border-radius: 5px;
	/* width: 100%; */
	margin: 0.5em;
	/* padding-right: 30px; */

	color: var(--font-grey);
`;

export const Library = styled.div`
	position: relative;
	/* height: fit-content; */
	/* height: 5100px; */
	flex: 1;
	background-color: var(--black-dark);
	border: 1px solid var(--black-dark);
	border-radius: 5px;
	margin: 0em 0.5em 0.5em;
`;

export const CreatePlaylist = styled.div`
	position: absolute;
	right: 10px;
	padding-right: 2%;
	button {
		color: white;
		border: none;
		height: 1.5em;
		width: 1.5em;
		padding: 20px;
		border-radius: 1em;
		padding: 0.1em;
		background: transparent;
		cursor: pointer;
		filter: brightness(80%);
		/* display: inline-flex;
		justify-content: end;
		align-items: center; */
		&:hover {
			filter: brightness(150%);
			background: #4b49492c;
			img {
				filter: brightness(100%);
			}
		}
	}
	button:nth-child(2) {
		margin-left: 0.5em;
	}
	img {
		margin: 0.15em;
	}
`;

export const ActionCards = styled.div`
	background: var(--greyest);
	border-radius: 15px;
	color: var(--font-white);
	margin: 0.4em;
	padding: 0.5em;
	margin-bottom: 1em;
	/* display: flex;
	flex-direction: column;
	justify-content: flex-start; */
	& > * {
		/* margin-top: 1em; */
		margin-bottom: 1em;
		margin-left: 0.5em;
	}
	h4 {
		line-height: 1.5em;
		margin-top: 0.4em;
	}
	p {
		line-height: 1.8em;
		font-size: 0.8rem;
		font-weight: 500;
		transform: scale(0.92);
		transform-origin: left;
	}
`;
export const ButtonLink = styled.a`
	display: flex;
	font-weight: 700;
	text-decoration: none;
	border-radius: 30px 30px 30px 30px;
	color: var(--font-black);
	font-size: 1em;
	background: var(--button-white);
	width: fit-content;
	margin-bottom: 0.3em;
	/* padding: 10em; */
	/* font-size: 0.6em; */
	span {
		font-size: 0.8em;
		margin: 0.5em 1em;
		transform: scale(0.9);
	}
`;
