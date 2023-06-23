import styled from "styled-components";

export const Container = styled.div`
	height: fit-content;
`;
export const Header = styled.div`
	background-color: tomato;
	display: flex;
	height: 20vh;
	& > div:nth-of-type(1) {
		& > img {
			height: 100%;
		}
	}
	& > div:nth-of-type(2) {
		& > div:nth-of-type(2) {
			display: flex;
		}
	}
`;
export const Tracks = styled.div``;
