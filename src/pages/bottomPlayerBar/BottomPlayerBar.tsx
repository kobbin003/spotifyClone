import React from "react";
import { PlayerBarContainer, TrackInfo } from "./style";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import MyAudioPlayer from "./audioPlayer/MyAudioPlayer";
type Props = {};

const BottomPlayerBar = (props: Props) => {
	return (
		<PlayerBarContainer>
			<TrackInfo>
				<div>
					<img
						src="/public/icons/defaultCover.svg"
						alt=""
					/>
				</div>
				<div>
					<p>Track</p>
					<p>Artist</p>
				</div>
			</TrackInfo>
			<MyAudioPlayer />
		</PlayerBarContainer>
	);
};

export default BottomPlayerBar;
