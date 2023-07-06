import styled from "styled-components";

export const Container = styled.div`
	background: var(--black-darkest);
	/* background: pink; */
	padding-top: 10px;
	height: 100vh;
	max-height: calc(100vh - calc((10 / 16) * 1em));
	overflow: hidden;
`;

export const LoadingMsg = styled.div`
	width: 100vw;
	height: 200px;
	/* background-color: aqua; */
	display: flex;
	justify-content: center;
	& > h4 {
		margin-top: 3em;
		color: white;
	}
`;
// 822 19
// -ms-overflow-style: none; /* Internet Explorer 10+ */
// scrollbar-width: none; /* Firefox */
// &::-webkit-scrollbar {
// 	display: none; /* Safari and Chrome */
// }
