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
	grid: auto/30px minmax(200px, 1fr) minmax(100px, 0.35fr);
	column-gap: 0.5em;
	row-gap: 0.5em;
	/* overflow: hidden; */
	padding-top: 0.2em;
	padding-bottom: 0.2em;
	&:hover {
		a {
			color: var(--font-white);
		}
		div:nth-of-type(3) {
			& > div {
				visibility: visible;
			}
			& > img {
				visibility: visible;
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
	}
	& > div:nth-of-type(2) {
	}

	& > div:nth-of-type(3) {
	}

	img {
		height: 20px;
	}
`;
export const TrackItem = styled(Row)`
	width: 97%;
	a {
		display: block;
		width: 100%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-decoration: none;
		color: var(--font-greyer);
		&:hover {
			cursor: default;
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
			a {
				font-size: 1rem;
				padding: 0.2em 0;
				color: var(--font-white);
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}
	}
	/* & > div:nth-of-type(3) {
		position: relative;
		background-color: green;
		display: grid;
		grid: auto/minmax(50px, 50px) minmax(50px, 1fr) 50px;
		justify-content: space-between;
		align-items: center;
		& > button {
			background-color: transparent;
			background-color: tomato;
			border: none;
			visibility: hidden;
			display: flex;
			justify-content: center;
			align-items: center;
			img {
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
	} */
	& > div:nth-of-type(3) {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-around;
		gap: 10px;
		padding-right: 1em;
		> div {
			flex: 1;
			display: flex;
			justify-content: flex-end;
			padding-right: 2em;
			/* background-color: aqua; */
			> button {
				background-color: transparent;
				height: 20px;
				width: 20px;
				border: none;
				visibility: hidden;
				> img {
					cursor: pointer;
					height: 100%;
				}
			}
		}
		> span {
			flex: 0.3;
		}
		> button {
			background-color: transparent;
			border: none;
			height: 20px;
			visibility: hidden;
			img {
				cursor: pointer;
				height: 100%;
			}
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
