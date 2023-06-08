import React from "react";
import { Container, Content, Pointy } from "./style";

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
					<button>Log in</button>
				</div>
			</Content>
			<Pointy></Pointy>
		</Container>
	);
};

export default PopUpCards;
