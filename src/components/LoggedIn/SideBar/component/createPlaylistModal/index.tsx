import { useContext, useEffect, useRef } from "react";
import { Form, Modal, ModalContainer } from "./style";
import { ShowModalContext } from "../../../../../layout/LoggedInLayout";

const CreatePlaylistModal = () => {
	const setShowModal = useContext(ShowModalContext);
	const handleCloseModal = () => {
		// console.log("modal context", setShowModal);
		setShowModal((prev) => !prev);
	};
	const ModalContainerRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const modalContainerEl = ModalContainerRef.current as HTMLDivElement;
		const handleClickEvent = (e: any) => {
			const modalEl = modalContainerEl.querySelector("#modal");
			// console.log("modalEl", modalEl);
			if (e.target !== modalEl && !modalEl?.contains(e.target)) {
				// console.log("the target", e.target);
				setShowModal(false);
			}
		};
		modalContainerEl.addEventListener("click", handleClickEvent);
		return () => modalContainerEl.addEventListener("click", handleClickEvent);
	}, []);
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
				<Form>
					<div>
						<label htmlFor="imageFile">
							<input
								type="file"
								id="imageFile"
								style={{ display: "none" }}
								// onClick={() => console.log("image clicked")}
							/>
							<img
								src="/public/icons/defaultCover.svg"
								alt=""
							/>
						</label>
						<input
							type="text"
							placeholder="playlist name"
						/>
						<textarea
							name="description"
							placeholder="add an optional description"
						/>
					</div>
					<div>
						<button type="submit">Save</button>
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

export default CreatePlaylistModal;
