import styled from "styled-components";

export const AudioPlayer = styled.div`
	position: relative;
	height: 100%;
	flex: 1;
	display: flex;
	justify-content: space-between;
	/* background-color: transparent; */
`;

export const LeftDiv = styled.div`
	position: relative;
	width: 70%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	> div:nth-of-type(1) {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		/* background-color: beige; */
		gap: 1em;
		& button {
			filter: brightness(69%);
		}
		& button:hover {
			filter: brightness(100%);
		}
		> button {
			position: relative;
			width: 30px;
			height: 100%;
			background-color: transparent;
			border: none;
			border-radius: 50%;
			/* background-color: yellow; */
			cursor: pointer;
			> img {
				height: 100%;
			}
		}

		> button:nth-of-type(2) {
			border-radius: 50%;
			height: 30px;
			width: 30px;
			background-color: white;
			filter: brightness(100%);
		}
		> button:nth-of-type(2):hover {
			transform: scale(1.05);
		}
	}
	> div:nth-of-type(2) {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		> p {
			display: flex;
			justify-content: center;
			width: 3em;
			font-size: 0.8rem;
		}
	}
`;

export const RangeInput = styled.input`
	/* Hides the slider so that custom slider can be made */
	-webkit-appearance: none;
	width: 100%;
	height: 0.2em;
	background: #767676;
	outline: none;
	border-radius: 16px;
	&::-ms-track {
		width: 100%;
		cursor: pointer;

		/* Hides the slider so custom styles can be added */
		background: transparent;
		border-color: transparent;
		color: transparent;
	}
	&:hover {
		cursor: pointer;
		&::-webkit-slider-thumb {
			-webkit-appearance: none;
			/* border: none;
		color: aqua; */
			background-color: white;
			position: relative;
			top: -150%;
			width: 0.6em;
			height: 0.6em;
			border: none;
			border-radius: 50%;
			cursor: pointer;
			/* Add cool effects to your sliders! */
			/* box-shadow: -407px 0 0 400px #f50;  */
		}
	}
	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		background-color: white;
		position: relative;
		top: -150%;
		width: 0.6em;
		height: 0.6em;
		border: none;
		border-radius: 50%;
		cursor: pointer;
	}

	&::-moz-range-thumb {
		background-color: white;
		position: relative;
		top: -150%;
		width: 0.6em;
		height: 0.6em;
		border: none;
		border-radius: 50%;
		cursor: pointer;
	}
`;

export const RightDiv = styled.div`
	position: relative;
	width: 25%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding-right: 1em;
	gap: 0.5em;
	& button {
		filter: brightness(69%);
	}
	& button:hover {
		filter: brightness(100%);
	}
	> div {
		height: 24%;
		display: flex;
		align-items: center;
		> button {
			border: none;
			cursor: pointer;
			background-color: transparent;
			height: 100%;
			width: 1.5em;
			display: flex;
			justify-content: flex-start;
			img {
				height: 100%;
				width: 100%;
			}
		}
	}
	> div:nth-of-type(3) {
		height: 18%;
	}
`;
