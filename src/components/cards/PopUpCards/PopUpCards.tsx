import React, { MouseEvent } from "react";
import { Container, Content, Pointy } from "./style";
import { authorize } from "../../../utils/authorize";

const PopUpCards = ({
	title,
	message,
	top,
	left,
	visibility,
}: {
	title: string;
	message: string;
	top: number;
	left: number;
	visibility: "visible" | "hidden";
}) => {
	const handleLogin = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		authorize();
	};
	return (
		<Container
			open
			top={top}
			left={left}
			visibility={visibility}
		>
			<Content>
				<h4>{title}</h4>
				<p>{message}</p>
				<div>
					<a onClick={handleLogin}>Log in</a>
				</div>
			</Content>
			<Pointy></Pointy>
		</Container>
	);
};

export default PopUpCards;
