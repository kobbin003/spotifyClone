import React from "react";
import getArtist from "../../../hooks/spotify-data/getArtist";
import { useParams } from "react-router-dom";
import { Container } from "./style";

const ArtistHeader = () => {
	const { id } = useParams();
	const { data, error, isLoading } = getArtist(id || "");
	// console.log("artist", data);
	// const imageUrl = data?.images[0].url;
	if (isLoading) return <h2>Loading...</h2>;
	if (error) return <h4>Error: {error.message}</h4>;
	return (
		<>
			{data && (
				<Container imageUrl={data?.images[0].url}>
					{/* <Container> */}
					<div>
						<h1>{data?.name.toUpperCase()}</h1>
						<p>
							{new Intl.NumberFormat().format(data?.followers.total)} listeners
						</p>
					</div>
					{/* <img
						src={data?.images[0].url}
						alt=""
					/> */}
				</Container>
			)}
		</>
	);
};

export default ArtistHeader;
