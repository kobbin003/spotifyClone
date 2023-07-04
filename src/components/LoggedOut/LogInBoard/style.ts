import styled from "styled-components";

export const Content = styled.main`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	/* margin-top: 50px; */
	position: relative;
	grid-column: 2/3;
	grid-row: 2/3;
	color: var(--font-grey);
	width: 100%;
	/* width: calc(100vw - (100vw - 100%) - 250px); */
	/** //*100vw - scroll width - sidebar-width */
	/** //! don't unmute the "border" */
	/* background-color: goldenrod; */
	/* border: 0.5px solid goldenrod; */
	& > div {
		background-color: black;
		height: 90%;
		width: 90%;
		display: flex;
		flex-direction: column;
		/* justify-content: space-between; */
		align-items: center;
		color: white;
		/* padding-top: 5em; */
		& > h1 {
			padding-top: 2em;
			padding-bottom: 1em;
			/* color: #1ac757; */
			/* text-decoration: underline; */
		}
		& > h2 {
			font-size: 3rem;
			padding-top: 0.5em;
			padding-bottom: 0.5em;
		}
		& > a {
			background-color: #1ed760;
			color: black;
			padding: 1em 6em;
			/* height: 50px;
			width: 200px; */
			border-radius: 1000px;
			font-weight: 700;
			&:hover {
				cursor: pointer;
				transform: scale(1.1);
				transform-origin: center;
			}
		}
		& > div {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 3em;
			padding-top: 1em;
			font-weight: 500;
			font-size: 1.2rem;
			/* border: 1px solid white; */
			border-top: 0.5px solid var(--font-greyer);
			& > p {
				color: var(--font-greyer);
			}
			& > a {
				color: white;
				&:hover {
					color: #1ed760;
				}
			}
		}
	}
`;
