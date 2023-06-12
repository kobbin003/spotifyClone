import React from "react";
import { useParams } from "react-router-dom";

const Artist = () => {
	const params = useParams();
	return (
		<div>
			<h1>album{params.id}</h1>
			<h1>album{params.id}</h1>
			<h1>album{params.id}</h1>
		</div>
	);
};

export default Artist;
