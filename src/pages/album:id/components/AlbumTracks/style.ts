import styled from "styled-components";

export const Container = styled.div`
	/* background-color: goldenrod; */
	width: 97%;
	min-width: 300px;
`;

export const Row = styled.li`
	position: relative;
	width: 100%;
	display: grid;
	grid: auto / minmax(30px, 50px) minmax(120px, 1fr) minmax(150px, 0.3fr);
	/* align-items: center; */
	justify-content: center;
	color: var(--font-greyer);
	font-size: 0.9rem;
	& > div {
		align-self: center;
	}
	& > div:nth-of-type(1) {
		/* background-color: pink; */
		justify-self: center;
	}
	& > div:nth-of-type(2) {
		/* background-color: darkmagenta; */
		white-space: nowrap;
		overflow: hidden;
	}
	& > div:nth-of-type(3) {
		/* background-color: violet; */
		/* justify-self: flex-end; */ //!
		padding-right: 1em;
		/* justify-self: center; */
		/* width: fit-content; */
	}
`;

export const Header = styled(Row)`
	width: 100%;
	font-weight: 600;
	border-bottom: 1px solid grey;
	padding-bottom: 0.4em;
	margin-bottom: 0.5em;
	& > div:nth-of-type(3) {
		display: flex;
		justify-content: center;
		/* background-color: aqua; */
		img {
			height: 15px;
		}
	}
`;

export const TrackItem = styled(Row)`
	/* background-color: blueviolet; */
	& > div:nth-of-type(1) {
		/* background-color: brown; */
		span {
			display: block;
			width: 100%;
			/* font-size: 1rem; */
		}
		button {
			/* width: 100%; */
			background-color: transparent;
			border: none;
			display: none;
			color: var(--font-greyer);
			font-weight: 500;
			font-size: 1rem;

			img {
				/* display: block; */
				/* height: 70%; */
				width: 70%;
			}
		}
	}
	& > div:nth-of-type(2) {
		& > p:nth-of-type(1) {
			color: var(--font-white);
			padding-top: 0.5em;
			padding-bottom: 0.3em;
			& > a {
				color: white;
			}
		}
		& > p:nth-of-type(2) {
			& > a {
				color: var(--font-greyer);
			}
		}
		display: flex;
		flex-direction: column;
		a {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			text-decoration: none;
			&:hover {
				text-decoration: underline;
			}
		}

		/* background-color: green; */
	}
	& > div:nth-of-type(3) {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-around;
		gap: 10px;
		> div {
			flex: 1;
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
		> button {
			background-color: transparent;
			border: none;
			height: 20px;
			/* visibility: hidden; */
			img {
				cursor: pointer;
				height: 100%;
			}
		}
		/* button:nth-of-type(1) {
			flex: 1;
		} */
	}
	&:hover {
		background-color: var(--data-display-background-hover);
		& > div:nth-of-type(1) {
			span {
				display: none;
			}
			button {
				display: flex;
				justify-content: center;
			}
		}
		& > div:nth-of-type(3) > button {
			visibility: visible;
		}
		& > div:nth-of-type(3) > div > button {
			visibility: visible;
		}
	}
`;
