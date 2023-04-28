import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50px;
	font-size: 0.9rem;
`;
export const ButtonLink = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 600;
	text-decoration: none;
	border-radius: 30px 30px 30px 30px;
`;

export const UpgradeLink = styled(ButtonLink)`
	font-size: 0.3rem;
	background: #ffffff;
	color: #000000;
	padding: 1em 2.5em;
	margin-right: 2em;
`;

export const InstallAppLink = styled(ButtonLink)`
	background: #000000;
	color: #ffffff;
	padding: 0.5em;
	/* display: inline-flex;
	justify-content: center;
	align-items: center;
	border: none; */
	& img {
		padding-right: 0.1em;
	}

	& span {
		font-size: 0.3em;
		font-weight: inherit;
	}
`;

export const ProfileButton = styled.button`
	width: auto;
	background-color: transparent;
	border: none;
	cursor: pointer;
`;
