import styled from "styled-components";

export const LibraryItemStyle = styled.li`
	/* display: flex; */
	height: 3em;
	width: 100%;
	overflow: hidden;
	padding: 0.3em 0.5em;

	a {
		/* background-color: purple; */
		display: flex;
		padding: 0 0em;
		/* align-content: center; */
		align-items: center;
		width: 100%;
		height: 100%;
		text-decoration: none;
		color: var(--font-white);

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
			/* background-color: brown; */
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			align-content: center;
			padding-left: 0.5em;
			white-space: nowrap;
			font-size: 0.8rem;
			width: 100%;
			height: 100%;
			padding-right: 10px;
			& > div:nth-of-type(1) {
				font-weight: 600;
				max-width: 100%;
				/* max-width: 120px; */
				/* background-color: aqua; */
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
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
