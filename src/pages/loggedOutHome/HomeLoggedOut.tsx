import React from "react";
import { Albums, Container, SubHeaders } from "./style";
import { UserAlbums } from "../../hooks/spotify-data/getUserAlbums";
import AlbumCards from "../../components/cards/AlbumCards/AlbumCards";
import getNewReleases from "../../hooks/spotify-data/getNewReleases";

const HomeLoggedOut = () => {
	const albumdata = localStorage.getItem("albumdata");
	const data: UserAlbums = JSON.parse(albumdata ?? "");
	// console.log(data);
	// const {data,error,isLoading} = getNewReleases()
	return (
		<Container>
			<>
				<SubHeaders>
					<h2>New Albums</h2>
					<a href="">
						<b>show all</b>
					</a>
				</SubHeaders>
				<Albums>
					{data &&
						data.items.map((item) => (
							<AlbumCards
								key={item.album.id}
								src={item.album.images[1].url}
								height={item.album.images[1].height}
								width={item.album.images[1].width}
								albumName={item.album.name}
								releaseDate={item.album.release_date}
								type={item.album.album_type}
							></AlbumCards>
						))}
					{data &&
						data.items.map((item) => (
							<AlbumCards
								key={item.album.id}
								src={item.album.images[1].url}
								height={item.album.images[1].height}
								width={item.album.images[1].width}
								albumName={item.album.name}
								releaseDate={item.album.release_date}
								type={item.album.album_type}
							></AlbumCards>
						))}
					{data &&
						data.items.map((item) => (
							<AlbumCards
								key={item.album.id}
								src={item.album.images[1].url}
								height={item.album.images[1].height}
								width={item.album.images[1].width}
								albumName={item.album.name}
								releaseDate={item.album.release_date}
								type={item.album.album_type}
							></AlbumCards>
						))}
				</Albums>
			</>
		</Container>
	);
};

export default HomeLoggedOut;
