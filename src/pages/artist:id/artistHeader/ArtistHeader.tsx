import React from "react";
import getArtist, {
	Artist,
	ArtistError,
} from "../../../hooks/spotify-data/getArtist";
import { Container } from "./style";
type ArtistHeaderData = {
	data: Artist | null;
	error: ArtistError | null;
	isLoading: boolean;
};
const ArtistHeader = ({
	artistHeaderData,
}: {
	artistHeaderData: ArtistHeaderData;
}) => {
	const { data, error, isLoading } = artistHeaderData;
	// console.log("artist", data);
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
