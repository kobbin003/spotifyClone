import styled from "styled-components";
import { Row } from "../../../search/pages/track/style";
export const TrackItem = styled(Row)`
	/* background-color: aqua;
	width: 90%; */
	a {
		display: block;
		width: 100%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-decoration: none;
		color: var(--font-greyer);
		&:hover {
			cursor: default;
		}
		span {
			&:hover {
				text-decoration: underline;
				cursor: pointer;
			}
		}
	}
	div:nth-of-type(1) {
		span {
			font-size: 1rem;
		}
		button {
			width: 100%;
			background-color: transparent;
			border: none;
			display: none;
			color: var(--font-greyer);
			font-weight: 500;
			font-size: 1rem;

			img {
				display: block;
				height: 75%;
				width: 75%;
			}
		}
	}
	div:nth-of-type(2) {
		display: flex;
		width: 100%;
		align-items: center;
		img {
			display: block;
			padding-right: 1em;
			height: 30px;
			width: auto;
		}
		div {
			width: 100%;
			overflow: hidden;
			a:nth-of-type(1) {
				font-size: 1rem;
				padding: 0.2em 0;
				color: var(--font-white);
			}
		}
	}
	/* div:nth-of-type(3) {
		overflow: hidden;
	} */
	div:nth-of-type(3) {
		justify-content: space-between;
		/* & > div {
			flex: 1;
			visibility: hidden;
		}
		& > img {
			padding-left: 0.5em;
			visibility: hidden;
		} */
	}

	&:hover {
		background-color: var(--data-display-background-hover);

		div:nth-of-type(1) {
			button {
				display: flex;
				justify-content: center;
			}
			& > span {
				display: none;
			}
		}
	}
`;
