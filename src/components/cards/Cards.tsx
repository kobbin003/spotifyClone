import React from "react";

const Cards = (img: string, title: string, description: string) => {
	return (
		<button>
			<img src="{img}"></img>
			<header>{title}</header>
			<p>{description}</p>
		</button>
	);
};

export default Cards;
