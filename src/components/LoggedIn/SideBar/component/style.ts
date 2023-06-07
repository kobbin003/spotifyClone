import styled from "styled-components";

export const ContainerLibrary = styled.div`
	height: calc(100% - 120px);
	max-height: calc(100% - 120px);
	/* width: 100%; */
	/* background-color: beige; */

	border-radius: 5px;
	color: var(--font-white);
	margin: 0.4em;
	padding: 0.5em;
	margin-bottom: 1em;
	overflow-y: scroll;
	overflow-x: hidden;
	/* scrollbar-color: var(--greyest); */
`;

export const LibraryItem = styled.a`
	display: flex;
	height: 3em;
	padding: 0.3em 0.5em;
	align-content: center;
	&:hover {
		background: var(--greyest);
	}
	& > div:nth-of-type(1) {
		width: 20%;
		min-width: 40px;
		max-width: 40px;
		display: flex;
		/* align-content: center; */
		/* background-color: aqua; */
	}
	& > div:nth-of-type(2) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		padding-left: 0.5em;
		overflow: hidden;
		white-space: nowrap;
		& > div {
		}
		/* width: 30%; */
		/* background-color: aqua; */
	}
	img {
		display: block;
		align-self: center;
		width: 100%;
		/* height: 80%; */
	}
`;
