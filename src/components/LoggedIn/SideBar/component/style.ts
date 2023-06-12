import styled from "styled-components";

export const ContainerLibrary = styled.ul`
	height: calc(100% - 120px);
	max-height: calc(100% - 120px);
	/* width: 100%; */

	border-radius: 5px;
	margin: 0.4em;
	padding: 0.5em;
	margin-bottom: 1em;
	overflow-y: scroll;
	overflow-x: hidden;
	/* scrollbar-color: var(--greyest); */
`;

export const LibraryItem = styled.li`
	/* display: flex; */
	height: 3em;
	width: 100%;
	overflow: hidden;
	padding: 0.3em 0.5em;
	a {
		display: flex;
		padding: 0 0em;
		/* align-content: center; */
		align-items: center;
		width: 100%;
		height: 100%;
		text-decoration: none;
		color: var(--font-white);
		/* background-color: brown; */

		& > div:nth-of-type(1) {
			width: 20%;
			min-width: 40px;
			max-width: 40px;
			display: flex;
			/* background-color: aqua; */
			img {
				height: 100%;
				width: 100%;
			}
			/* align-content: center; */
		}
		& > div:nth-of-type(2) {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-content: center;
			padding-left: 0.5em;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			font-size: 0.8rem;
			width: 100%;
			/* background-color: aqua; */
			padding-right: 10px;
			& > div:nth-of-type(1) {
				font-weight: 600;
				width: 100%;
			}
			& > div:nth-of-type(2) {
				color: var(--font-greyer);
				font-weight: 500;
				display: flex;
				scale: 0.9;
				transform-origin: left;
			}
			/* width: 30%; */
			/* background-color: aqua; */
		}
	}
	&:hover {
		background: var(--greyest);
	}
`;
