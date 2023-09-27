import styled from "styled-components";

export const PlayerBarContainer = styled.div`
	display: flex;
	position: fixed;
	bottom: 0;
	height: 12vh;
	width: 100vw;
	background-color: black;
	/* background-color: burlywood; */
	box-shadow: 0 0 5px 3px black;
	color: #767676;
	z-index: 10;
	display: flex;
`;

export const TrackInfo = styled.div`
	position: relative;
	height: 100%;
	width: 30vw;
	display: flex;
	gap: 1em;
	padding: 0 1em;
	/* background-color: chocolate; */

	> div {
		display: flex;
	}

	> div:nth-of-type(1) {
		/* background-color: brown; */
		position: relative;
		height: 100%;
		justify-content: center;
		align-items: center;
		> img {
			height: 90%;
			width: 90%;
			border-radius: 10px;
		}
	}

	> div:nth-of-type(2) {
		/* background-color: yellow; */
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		gap: 0.5em;
		/* width: 200px; */
		p {
			width: max-content;
			font-size: 0.8rem;
			&:nth-of-type(1) {
				color: white;
				font-weight: 600;
			}
			&:nth-of-type(2) {
				font-weight: 500;
			}
		}
	}
`;
