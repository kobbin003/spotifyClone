import { albums } from "../data";
import AlbumCards from "../../../../components/cards/AlbumCards/AlbumCards";
import { Container, Message, Title } from "./style";
import { useOutletContext } from "react-router-dom";
import getSearchItem, {
	SearchDataAlbum,
} from "../../../../hooks/spotify-data/getSearchItem";
const Albums = () => {
	const [queryFromSearchBar, ,]: any[] = useOutletContext();
	// console.log("album", queryFromSearchBar);
	const { data, error, isLoading } = getSearchItem<SearchDataAlbum>(
		queryFromSearchBar,
		"album"
	);
	return (
		<>
			{!queryFromSearchBar ? (
				<Message>Please search for albums in the searchbox&#9757;</Message>
			) : isLoading ? (
				<Message>Loading...</Message>
			) : (
				<>
					<Title>Albums</Title>
					<Container>
						{data &&
							data.albums.items.map((item) => (
								<AlbumCards
									key={item.id}
									search="album"
									id={item.id}
									src={item.images[1].url}
									albumName={item.name}
									releaseDate={item.release_date}
									type={item.album_type}
									height={50}
									width={50}
								/>
							))}
					</Container>
				</>
			)}
		</>
	);
};

export default Albums;
