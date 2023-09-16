import {
	ChangeEvent,
	MouseEvent,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";
import { Form, Message, Modal, ModalContainer } from "./style";
import { ShowModalContext } from "../../../../../layout/LoggedInLayout";
import updatePlaylist from "../../../../../hooks/spotify-data/playlist/updatePlaylist";
import getPlaylistPhoto from "../../../../../hooks/spotify-data/playlist/getPlaylistPhoto";

const EditPlaylistModal = () => {
	const showModal = useContext(ShowModalContext)?.showModal;
	const setShowModal = useContext(ShowModalContext)?.setShowModal;

	const [accessToken, setAccessToken] = useState<string | undefined>();

	const [formData, setFormData] = useState<{
		name: string;
		description: string;
	}>({
		name: "",
		description: "",
	});

	const [imgSelected, setImgSelected] = useState<{
		file: File;
		imageUrl: string;
		imgBase64: string;
	}>();

	const [errorMessage, setErrorMessage] = useState<{
		showError: boolean;
		errorMsg: string;
	}>({ showError: false, errorMsg: "" });

	const [fetchedPlaylistPhoto, setFetchedPlaylistPhoto] = useState<{
		url: string;
		width: number;
		height: number;
	}>();

	const [loading, setLoading] = useState(false);

	const handleCloseModal = () => {
		setShowModal((prev) => ({ ...prev, show: false }));
	};

	const handleOnChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;

		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleOnChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			const file = e.target.files[0];
			const imageUrl = URL.createObjectURL(file);
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => {
				const imgBase64 = reader.result as string;
				const base64DataPart = imgBase64.split(",")[1];
				try {
					// Decode the Base64 string to binary data
					const binaryData = window.atob(base64DataPart);

					// Get the size of the binary data in bytes
					const sizeInBytes = binaryData.length;
					if (base64DataPart) {
						if (sizeInBytes < 256000) {
							setImgSelected({ file, imageUrl, imgBase64: base64DataPart });
							setErrorMessage((prev) => ({
								...prev,
								showError: false,
								errorMsg: "",
							}));
						} else {
							// show message that the file is too large
							setErrorMessage((prev) => ({
								...prev,
								showError: true,
								errorMsg: "File Size extended: choose a different photo",
							}));
						}
					}
				} catch (error) {
					console.log("error decoding base64 string", error);
				}
			};
		}
	};

	const handleSubmit = (e: MouseEvent<HTMLFormElement>) => {
		e.preventDefault();

		//update playlist detail
		const url = `https://api.spotify.com/v1/playlists/${showModal?.playlistId}`;
		const body = formData;
		const contentType = "application/json";

		if (accessToken) {
			if (formData.name && formData.description) {
				// console.log("both");
				setLoading(true);

				updatePlaylist<{
					name: string;
					description: string;
				}>(url, "PUT", body, contentType, accessToken, setAccessToken, () => {
					if (!imgSelected?.file) {
						setLoading(false);
						dispatchEvent(new Event("playlistLibraryModified"));
						dispatchEvent(new Event("PlaylistPageModified"));
						setShowModal((prev) => ({ ...prev, show: false }));
					}
				});
			} else if (formData.name && !formData.description) {
				// console.log("only name", !formData.description);
				setErrorMessage((prev) => ({
					...prev,
					errorMsg: "description is empty",
					showError: true,
				}));
			} else if (!formData.name && formData.description) {
				// console.log("only desc");
				setErrorMessage((prev) => ({
					...prev,
					errorMsg: "name is empty",
					showError: true,
				}));
			} else {
				// do nothing.
				// console.log("none: do nothing");
			}
		}

		//update playlist image
		const imgUrl = `https://api.spotify.com/v1/playlists/${showModal?.playlistId}/images`;
		const imgBody = imgSelected?.imgBase64;
		// const pattern = /data:image\/jpeg;base64,/g;
		// const modImgBody = imgBody?.replace(pattern, "");
		//OR split it with ","
		const contentTypeImg = "image/jpeg";

		//? using updatePlaylist in case of photo shows cors error
		//? that's why use proxy server to request

		const spotifyFetchPayload = {
			url: imgUrl,
			method: "PUT",
			headers: {
				Authorization: `Bearer ${accessToken}`,
				"Content-Type": contentTypeImg,
			},
			body: imgBody,
		};

		const options = {
			method: "POST",
			headers: {
				"Content-Type": "Application/json",
			},
			body: JSON.stringify(spotifyFetchPayload),
		};

		if (accessToken && imgBody) {
			setLoading(true);
			fetch("http://localhost:7000/spotify-proxy", options)
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					if (data.msg == "SUCCESS") {
						handleCloseModal();
						setLoading(false);
						dispatchEvent(new Event("playlistLibraryModified"));
						dispatchEvent(new Event("PlaylistPageModified"));
						// dispatchEvent(new Event("PlaylistPhotoModified"));
					} else if (data.msg == "ERROR") {
						setErrorMessage((prev) => ({
							...prev,
							showError: true,
							errorMsg: `ERROR: ${data.error}`,
						}));
					}
				});
		}
	};

	const ModalContainerRef = useRef<HTMLDivElement>(null);

	// outside click catcher
	useEffect(() => {
		const modalContainerEl = ModalContainerRef.current as HTMLDivElement;
		const handleClickEvent = (e: any) => {
			const modalEl = modalContainerEl.querySelector("#modal");
			// console.log("modalEl", modalEl);
			if (e.target !== modalEl && !modalEl?.contains(e.target)) {
				// console.log("the target", e.target);
				setShowModal((prev) => ({ ...prev, show: false }));
			}
		};
		modalContainerEl.addEventListener("click", handleClickEvent);
		return () => modalContainerEl.addEventListener("click", handleClickEvent);
	}, []);

	// accesToken
	useEffect(() => {
		const token = localStorage.getItem("accessToken");
		token && setAccessToken(token);
	}, []);

	// fetch the current playlist photo
	useEffect(() => {
		const photoUrl = `https://api.spotify.com/v1/playlists/${showModal.playlistId}/images`;

		accessToken &&
			setAccessToken &&
			showModal.playlistId &&
			getPlaylistPhoto(photoUrl, "GET", accessToken, setAccessToken, (data) => {
				// console.log("playlistCurrentPhoto", data);
				const photo = data[0];
				setFetchedPlaylistPhoto(photo);
			});
	}, [accessToken]);

	return (
		<ModalContainer ref={ModalContainerRef}>
			<Modal id="modal">
				<div>
					<h3>Playlist Details</h3>
					<button onClick={handleCloseModal}>
						<img
							src="/public/icons/close.svg"
							alt=""
						/>
					</button>
				</div>
				{errorMessage.showError && (
					<Message backgroundColor="red">
						<img src="/public/icons/info.svg" />
						<span>{errorMessage.errorMsg}</span>
					</Message>
				)}
				{loading && (
					<Message backgroundColor="#279EFF">
						<img src="/public/icons/info.svg" />
						<span>Loading...</span>
					</Message>
				)}
				<Form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="imageFile">
							<input
								name="img"
								type="file"
								id="imageFile"
								style={{ display: "none" }}
								accept=".jpg"
								onChange={handleOnChangeFile}
								// onClick={() => console.log("image clicked")}
							/>
							<img
								src={
									imgSelected
										? imgSelected.imageUrl
										: fetchedPlaylistPhoto
										? fetchedPlaylistPhoto.url
										: "/public/icons/defaultCover.svg"
								}
								alt=""
							/>
						</label>
						<input
							name="name"
							type="text"
							placeholder="playlist name"
							onChange={handleOnChange}
						/>
						<textarea
							name="description"
							placeholder="add an optional description"
							onChange={handleOnChange}
						/>
					</div>
					<div>
						<button
							type="submit"
							// disabled={disableSubmit}
						>
							Save
						</button>
					</div>
					<div>
						<p>
							By proceeding, you agree to give Spotify access to the image you
							choose to upload. Please make sure you have the right to upload
							the image.
						</p>
					</div>
				</Form>
			</Modal>
		</ModalContainer>
	);
};

export default EditPlaylistModal;
