import styled from "styled-components";

export const Container = styled.div`
	height: fit-content;
	padding: 0.5em;
	& > div:nth-of-type(2) {
		/* background-color: aqua; */
	}
`;
export const Header = styled.div`
	/* background-color: tomato; */
	display: flex;
	height: 20vh;
	& > div:nth-of-type(1) {
		padding: 0.5em;
		& > img {
			height: 100%;
		}
	}
	& > div:nth-of-type(2) {
		padding: 0.5em;
		display: flex;
		flex-direction: column;
		& > div:nth-of-type(1) {
			/* display: flex; */
			flex: 1;
			a {
				text-decoration: none;
				color: white;
				&:hover {
					text-decoration: underline;
				}
			}
		}
		& > div:nth-of-type(2) {
			display: flex;
			color: var(--font-grey);
			font-size: 0.9rem;
			& > p:nth-of-type(1) {
				text-transform: capitalize;
			}
		}
		& > div:nth-of-type(3) {
			height: 50px;
			/* background-color: aqua; */
			padding: 1px;
			& > img {
				height: 30px;
			}
			& > div {
			}
		}
	}
`;
export const Tracks = styled.div``;
