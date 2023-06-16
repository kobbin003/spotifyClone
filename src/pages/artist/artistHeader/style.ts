import styled from "styled-components";

export const Container = styled.div<{ imageUrl: string }>`
	height: 50vh;
	width: 97%;
	background-image: url(${(prop) => prop.imageUrl});
	background-size: 50%;
	background-repeat: repeat;
	@media screen and (max-width: 700px) {
		background-size: cover;
		background-repeat: no-repeat;
	}
	background-position: 0% 20%;
	& > div {
		height: 100%;
		/* background-color: chocolate; */
		display: flex;
		flex-direction: column;
		gap: 2em;
		justify-content: flex-end;
		padding-left: 1em;
		h1 {
			width: 100%;
			font-size: 7rem;
			@media screen and (max-width: 600px) {
				font-size: 5rem;
			}
			@media (min-width: 600px) and (max-width: 700px) {
				font-size: 6rem;
			}
		}
		p {
			margin-bottom: 1em;
		}
	}
`;
