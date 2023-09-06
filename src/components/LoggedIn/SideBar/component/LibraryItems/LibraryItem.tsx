import { FetchedData } from "../UserLibrary";
import { AlbumItems } from "./AlbumItems";
import { ArtistItems } from "./ArtistItems";
import PlaylistItems from "./PlaylistItems";

//* WE HAVE REMOVED THE "itemType" prop
//* since we can use typeguard(ts) to check the type of fetchedData

const LibraryItem = ({
	itemType,
	fetchedData,
}: {
	itemType: string;
	fetchedData: FetchedData | { data: {} };
}) => {
	const { data } = fetchedData;
	return (
		<>
			{data && (
				<>
					{itemType == "albums" && data && <AlbumItems data={data} />}
					{itemType == "artists" && data && <ArtistItems data={data} />}
					{itemType == "playlists" && data && <PlaylistItems data={data} />}
				</>
			)}
		</>
	);
};

export default LibraryItem;
