import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	width: 100%;
	/* max-width: inherit; */
	font-weight: 500;
	font-size: 0.8rem;
	/* border: 1px solid goldenrod; */
	/* margin-top: 50px; */
`;

export const Row = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	overflow: hidden;
	&:hover {
		a {
			color: var(--font-white);
		}
		div:nth-of-type(4) {
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
		width: 3em;
		min-width: 40px;
		/* background-color: red; */
		text-align: center;
	}
	& > div:nth-of-type(2) {
		flex: 1;
		min-width: 200px;
	}
	& > div:nth-of-type(3) {
		/* background-color: greenyellow; */
		width: 15em;
		min-width: 100px;
	}
	& > div:nth-of-type(4) {
		/* background-color: greenyellow; */
		width: 5em;
		min-width: 8em;
		display: flex;
		align-items: center;
		margin-right: 2em;
	}

	img {
		height: 20px;
	}
`;
export const Header = styled(Row)<{ left: number; widthHandleDragger: number }>`
	position: fixed;
	width: calc(100vw - ${(prop) => prop.left + prop.widthHandleDragger + 5.1}em);
	border-bottom: 1px solid var(--font-grey);
	padding: 0.5em 0;
	background-color: var(--background-dull);
	z-index: 10;
	div:nth-of-type(4) {
		align-self: center;
		justify-content: center;
		overflow: hidden;
		img {
			display: block;
		}
	}
`;
export const TrackBody = styled.div`
	padding-bottom: 1em;
	padding-top: 50px;
	/* margin-top: 50px; */
`;
export const TrackItem = styled(Row)`
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
	div:nth-of-type(1) {
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
	div:nth-of-type(2) {
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
			a:nth-of-type(1) {
				font-size: 1rem;
				padding: 0.2em 0;
				color: var(--font-white);
			}
		}
	}
	div:nth-of-type(3) {
		overflow: hidden;
	}
	div:nth-of-type(4) {
		justify-content: space-between;
		& > div {
			flex: 1;
			visibility: hidden;
		}
		& > img {
			padding-left: 0.5em;
			visibility: hidden;
		}
	}

	&:hover {
		background-color: var(--data-display-background-hover);

		div:nth-of-type(1) {
			button {
				display: flex;
				justify-content: center;
			}
			& > span {
				display: none;
			}
		}
	}
`;
