import styled from "styled-components";
// import { Row } from "../../../search/pages/track/style";
export const Container = styled.div`
	& > h2 {
		padding-bottom: 1em;
	}
`;

export const Row = styled.div`
	width: 100%;
	display: grid;
	grid: auto/30px minmax(200px, 1fr) minmax(100px, 0.35fr) minmax(100px, 0.35fr) minmax(
			100px,
			0.35fr
		);
	column-gap: 0.5em;
	row-gap: 0.5em;
	/* overflow: hidden; */
	padding-top: 0.2em;
	padding-bottom: 0.2em;
	&:hover {
		a {
			color: var(--font-white);
		}
		div:nth-of-type(5) {
			& > button {
				visibility: visible;
				& > img {
					visibility: visible;
				}
			}
		}
	}
	& > div {
		padding-left: 0.2em;
		color: var(--font-greyer);
	}
	& > div:nth-of-type(1) {
		display: flex;
		justify-content: center;
		align-items: center;
		/* background-color: burlywood; */
	}
	& > div:nth-of-type(5) {
		/* background-color: tomato; */
	}

	& > div:nth-of-type(3) {
		/* background-color: aqua; */
	}

	img {
		height: 20px;
	}
`;

export const Header = styled(Row)`
	width: 97%;

	font-weight: 600;
	border-bottom: 1px solid grey;
	padding-bottom: 0.4em;
	margin-bottom: 0.5em;
	& > div:nth-of-type(4) {
		white-space: nowrap;
	}
	& > div:nth-of-type(5) {
		display: flex;
		justify-content: center;
		img {
			height: 15px;
		}
	}
`;

export const TrackItem = styled(Row)`
	/* background-color: aqua;*/
	width: 97%;
	a {
		display: block;
		width: 100%;
		white-space: nowrap;
		/* overflow: hidden; */
		text-overflow: ellipsis;
		text-decoration: none;
		color: var(--font-greyer);
		&:hover {
			cursor: default;
			/* text-decoration: underline; */
		}
		span {
			&:hover {
				text-decoration: underline;
				cursor: pointer;
			}
		}
	}

	& > div:nth-of-type(1) {
		/* background-color: aquamarine; */
		span {
			font-size: 1rem;
		}
		button {
			width: 100%;
			background-color: transparent;
			border: none;
			display: none;
			color: var(--font-greyer);
			font-weight: 500;
			font-size: 1rem;

			img {
				display: block;
				height: 75%;
				width: 75%;
			}
		}
	}

	& > div:nth-of-type(2) {
		/* background-color: burlywood; */
		display: flex;
		width: 100%;
		align-items: center;
		img {
			display: block;
			padding-right: 1em;
			height: 30px;
			width: auto;
		}
		div {
			width: 100%;
			overflow: hidden;
			> a {
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
			a:nth-of-type(1) {
				font-size: 1rem;
				padding: 0.2em 0;
				color: var(--font-white);
			}
		}
	}

	& > div:nth-of-type(3) {
		display: flex;
		align-items: center;
		/* background-color: tomato; */
		/* overflow: hidden; */
		> a {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}

	& > div:nth-of-type(4) {
		display: flex;
		align-items: center;
	}

	& > div:nth-of-type(5) {
		/* background-color: silver; */
		position: relative;
		display: grid;
		grid: auto/minmax(50px, 50px) minmax(50px, 1fr) 50px;
		justify-content: space-between;
		& > button {
			background-color: transparent;
			border: none;
			visibility: hidden;
			> img {
				cursor: pointer;
			}
		}
		& > button:nth-of-type(1) {
			flex: 1;
			min-width: 50px;
			max-width: 80px;
		}
		& > span {
			display: flex;
			justify-content: flex-end;
			align-items: center;
		}
	}

	&:hover {
		background-color: var(--data-display-background-hover);
		& > div:nth-of-type(1) {
			button {
				display: flex;
				justify-content: center;
			}
			& > span {
				display: none;
			}
		}
		& > div:nth-of-type(3) {
			button {
				visibility: visible;
			}
		}
	}
`;
