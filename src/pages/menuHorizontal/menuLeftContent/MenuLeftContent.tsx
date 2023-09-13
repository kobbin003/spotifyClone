import {
	ChangeEvent,
	MouseEvent,
	useContext,
	useEffect,
	useState,
} from "react";
import getUserPlaylist, {
	UserPlaylistItem,
} from "../../../hooks/spotify-data/getUserPlaylist";
import { UserProfileContext } from "../../../layout/LoggedInLayout";
import { InnerUl } from "../style";

type Props = {};

const MenuLeftContent = (props: Props) => {
	const userProfileContext = useContext(UserProfileContext);

	const { data, error, isLoading } = getUserPlaylist();

	const [searchValue, setSearchValue] = useState("");

	const [resetButtonVisibile, setResetButtonVisibile] = useState(false);

	const [userOwnedPlaylists, setUserOwnedPlaylists] = useState<
		UserPlaylistItem[] | null
	>(null);

	const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);

		// start showing reset button after inital input.
		setResetButtonVisibile(true);
		// stop showing reset button when input is empty.
		if (e.target.value == "") {
			setResetButtonVisibile(false);
		}
	};

	const handleReset = (e: MouseEvent<HTMLButtonElement>) => {
		setSearchValue("");
		setResetButtonVisibile(false);
		// // keep focus on input even after resetting
		// if (searchInput.current) {
		// 	searchInput.current.focus();
		// }
	};

	const userId = userProfileContext?.userProfile?.id;

	const handleTrackSavedOnPlaylist = () => {};

	useEffect(() => {
		const userPlaylists = data?.items;
		// check if the playlist's owner is the user
		const userOwnedPlaylists = userPlaylists?.filter(
			(playlist) => playlist.owner.id == userId
		);
		userOwnedPlaylists && setUserOwnedPlaylists(userOwnedPlaylists);
	}, [data]);

	return (
		<>
			<li>
				<img src="/icons/navBar/searchWhiteGrey.svg"></img>
				<input
					type="search"
					placeholder="Find a playlist"
					value={searchValue}
					autoFocus
					onChange={handleOnChange}
				></input>
				<button
					style={{ visibility: resetButtonVisibile ? "visible" : "hidden" }}
					type="button"
					onClick={handleReset}
				>
					<img src="/icons/navBar/clearInputWhiteGrey.svg" />
				</button>
			</li>
			<li>
				<button>create playlist</button>
			</li>

			{isLoading ? (
				<p>Loading...</p>
			) : error ? (
				<p>error: {error.message}</p>
			) : (
				<InnerUl>
					{userOwnedPlaylists?.map((playlist) => (
						<li key={playlist.id}>
							<button onClick={handleTrackSavedOnPlaylist}>
								{playlist.name}
							</button>
						</li>
					))}
				</InnerUl>
			)}
		</>
	);
};

export default MenuLeftContent;
