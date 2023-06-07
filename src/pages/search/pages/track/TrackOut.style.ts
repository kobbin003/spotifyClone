import styled from "styled-components";

export const Container = styled.div<{
	left: number;
	widthHandleDragger: number;
}>`
	width: 100%;
	position: relative;
	min-width: calc(
		100vw - ${(prop) => prop.left + prop.widthHandleDragger}em - 16.5rem
	);
	/* border: 0.3px solid goldenrod;
	background-color: pink; */
	overflow-x: hidden;
	font-weight: 500;
	font-size: 0.8rem;
	margin-top: -5px;
	overscroll-behavior: contain;
`;

export const Row = styled.div`
	/* position: relative; */
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	overflow: hidden;
	/* display: grid;
	grid:
		auto/
		minmax(40px, 40px) minmax(250px, auto) minmax(150px, auto) minmax(0px, auto); */
	&:hover {
		a {
			color: var(--font-white);
		}
		& > div:nth-of-type(4) {
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
		height: fit-content;
	}
	& > div:nth-of-type(1) {
		width: 40px;
		min-width: 40px;
		/* background-color: red; */
		text-align: center;
	}
	& > div:nth-of-type(2) {
		flex: 0.9;
		min-width: 150px;
		margin-right: 1em;
		/* background-color: greenyellow; */
		@media screen and (max-width: 650px) {
			width: 150px;
		}
		@media (min-width: 650px) and (max-width: 700px) {
			width: 165px;
		}
		@media (min-width: 700px) and (max-width: 750px) {
			width: 190px;
		}
		@media (min-width: 750px) and (max-width: 850px) {
			width: 200px;
		}
		@media (min-width: 850px) and (max-width: 1050px) {
			width: auto;
		}
		overflow-x: hidden;
		white-space: nowrap;
	}
	& > div:nth-of-type(3) {
		flex: 0.4;
		min-width: 150px;
		margin-right: 1em;
		@media screen and (max-width: 750px) {
			width: 120px;
		}
		@media (min-width: 750px) and (max-width: 850px) {
			width: auto;
		}
		overflow-x: hidden;
		white-space: nowrap;
		/* background-color: greenyellow; */
		/* width: 15em; */
	}
	& > div:nth-of-type(4) {
		/* background-color: greenyellow; */
		/* flex: 0.2; */
		display: flex;
		align-items: center;
		min-width: 90px;
		margin-right: 2em;
	}

	img {
		height: 20px;
	}
`;

export const Header = styled(Row)<{ left: number; widthHandleDragger: number }>`
	position: fixed;

	width: calc(
		100vw - ${(prop) => prop.left + prop.widthHandleDragger}em - 16rem
	);
	border-bottom: 1px solid var(--font-grey);
	padding: 0.5em 0;
	background-color: var(--background-dull);
	z-index: 1;
	div:nth-of-type(2) {
		@media screen and (max-width: 650px) {
			min-width: 150px;
		}
		@media (min-width: 650px) and (max-width: 700px) {
			min-width: 165px;
		}
		@media (min-width: 700px) and (max-width: 750px) {
			min-width: 190px;
		}
		@media (min-width: 750px) and (max-width: 850px) {
			min-width: 220px;
		}
		@media (min-width: 850px) and (max-width: 1050px) {
			min-width: auto;
		}
	}
	div:nth-of-type(3) {
		/* background-color: aqua; */
		/* width: 500px; */
	}
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
	position: relative;
	padding-bottom: 1em;
	padding-top: 50px;
	/* background-color: darkorchid; */
`;
export const TrackItem = styled(Row)`
	position: relative;
	&:hover {
		background-color: var(--data-display-background-hover);
		& > div {
		}
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

export const CountColumn = styled.div`
	span {
		display: block;
		font-size: 1rem;
	}
	button {
		display: block;
		width: 100%;
		border: none;
		display: none;
		background-color: transparent;
		color: var(--font-greyer);
		font-weight: 500;
		font-size: 1rem;

		img {
			display: block;
			height: 75%;
			width: 75%;
		}
	}
`;
export const TitleColumn = styled.div`
	display: flex;
	align-items: center;
	img {
		display: block;
		padding-right: 1em;
		height: 30px;
		width: auto;
	}
	& > div {
		display: flex;
		flex-direction: column;
		a {
			display: block;
			width: 100%;

			text-decoration: none;
			font-size: 1rem;
			padding: 0.2em 0;
			color: var(--font-greyer);
			&:nth-of-type(1) {
				color: var(--font-white);
			}
			span {
				display: block;
				white-space: nowrap;
				/** //! change width at media*/

				overflow: hidden;
				text-overflow: ellipsis;

				&:hover {
					text-decoration: underline;
				}
			}
		}
	}
`;
export const AlbumColumn = styled.div`
	a {
		display: block;
		text-decoration: none;
		font-size: 1rem;
		padding: 0.2em 0;
		color: var(--font-greyer);
		cursor: default;
		span {
			&:hover {
				text-decoration: underline;
				cursor: pointer;
			}
		}
	}
`;
export const TimeColumn = styled.div`
	justify-content: space-between;
	& > div {
		flex: 1;
		visibility: hidden;
	}
	& > img {
		padding-left: 0.5em;
		visibility: hidden;
	}
`;
