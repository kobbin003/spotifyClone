import React, {
	ChangeEvent,
	MouseEvent,
	useEffect,
	useRef,
	useState,
} from "react";

import { AudioPlayer, LeftDiv, RangeInput, RightDiv } from "./style";

type Props = {};

const MyAudioPlayer = (props: Props) => {
	const audioRef = useRef<HTMLAudioElement>(null);
	const [audioElement, setAudioElement] = useState<HTMLMediaElement | null>(
		audioRef.current
	);
	const [progressValue, setProgressValue] = useState(0);
	const [trackDuration, setTrackDuration] = useState(0);
	const [audioVolume, setAudioVolume] = useState(0.5);
	const [timeElapsed, setTimeElapsed] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isLooped, setIsLooped] = useState(false);

	const rangeInputTrackRef = useRef<HTMLInputElement>(null);
	const rangeInputVolumeRef = useRef<HTMLInputElement>(null);

	// play/ pause/ reload
	const handleClick = (e: MouseEvent) => {
		const clickedEl = e.currentTarget as HTMLElement;
		const elName = clickedEl.getAttribute("name");
		// console.log(clickedEl, el);
		switch (elName) {
			case "play":
				audioRef.current?.play();
				break;
			case "pause":
				audioRef.current?.pause();
				break;
			case "reload":
				audioRef.current?.load();
				break;

			default:
				break;
		}
	};

	// loop a track
	const handleLoop = () => {
		if (audioElement) {
			if (!audioElement.loop) {
				audioElement.loop = true;
				setIsLooped(true);
			} else {
				audioElement.loop = false;
				setIsLooped(false);
			}
		}
	};

	// mute
	const handleMute = () => {
		if (audioElement) {
			if (!audioElement.muted) {
				audioElement.muted = true;
			} else {
				audioElement.muted = false;
			}
		}
	};

	// volume
	const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newVolume = Number(event.target.value);
		setAudioVolume(newVolume);
		if (audioElement && (audioElement as HTMLAudioElement)) {
			audioElement.volume = newVolume;
		}
		paintProgress(rangeInputVolumeRef);
	};

	// track
	const handleTrackTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (audioElement) {
			audioElement.currentTime = Number(e.target.value);
		}
		paintProgress(rangeInputTrackRef);
	};

	const paintProgress = (refElement: any) => {
		const el = refElement.current as HTMLInputElement;
		const sliderValue = el.value;
		const sliderMax = el.getAttribute("max");
		const gradientPercentage = (Number(sliderValue) / Number(sliderMax)) * 100;

		el.style.background = `linear-gradient(to right, green ${gradientPercentage}%, #767676 ${gradientPercentage}%)`;
	};
	const handleTrackEnded = () => {
		// you can add track if there is a playlist using "addTextTrack()"
	};

	useEffect(() => {
		// since inital volume is set to 0.5
		paintProgress(rangeInputVolumeRef);

		// set the audioElement or the eventListenere's won't work
		const audioEl = audioRef.current as HTMLAudioElement;
		setAudioElement(audioEl);

		// listen to the change of track's current time
		audioEl.addEventListener("timeupdate", function (e) {
			setProgressValue(this.currentTime);
			setTimeElapsed(this.currentTime);
			paintProgress(rangeInputTrackRef);
		});

		// start listening when playback has begun
		audioEl.addEventListener("play", function (e) {
			// console.log(e);
			setTrackDuration(this.duration);
			setIsPlaying(true);
		});

		// listen for pause
		audioEl.addEventListener("pause", () => {
			// You can perform actions when audio is paused or stopped here
			setIsPlaying(false);
		});
	}, []);

	return (
		<AudioPlayer>
			<audio
				src="/public/music.mp3"
				ref={audioRef}
				onProgress={() => console.log("audio downloading...")}
				preload="auto"
				onEnded={handleTrackEnded}
			/>
			<LeftDiv>
				<div>
					<button
						onClick={handleClick}
						name=""
					>
						<img
							src="/public/icons/audioPlayer/playprev.svg"
							alt=""
						/>
					</button>
					{!isPlaying ? (
						<button
							onClick={handleClick}
							name="play"
						>
							<img
								src="/public/icons/audioPlayer/play.svg"
								alt=""
							/>
						</button>
					) : (
						<button
							onClick={handleClick}
							name="pause"
						>
							<img
								src="/public/icons/audioPlayer/pause.svg"
								alt=""
							/>
						</button>
					)}
					<button
						onClick={handleClick}
						name=""
					>
						<img
							src="/public/icons/audioPlayer/playnext.svg"
							alt=""
							height={30}
							width={30}
						/>
					</button>
					{!isLooped ? (
						<button onClick={handleLoop}>
							<img
								src="/public/icons/audioPlayer/loop.svg"
								alt=""
								height={30}
								width={30}
							/>
						</button>
					) : (
						<button onClick={handleLoop}>
							<img
								src="/public/icons/audioPlayer/loopGreen.svg"
								alt=""
								height={30}
								width={30}
							/>
						</button>
					)}
				</div>
				<div>
					<p>{(progressValue / 60).toFixed(2)}</p>
					<RangeInput
						ref={rangeInputTrackRef}
						type="range"
						min={0}
						max={trackDuration}
						step={"0.01"}
						value={timeElapsed}
						onChange={handleTrackTimeChange}
					/>

					<p>{(trackDuration / 60).toFixed(2)}</p>
				</div>
			</LeftDiv>
			<RightDiv>
				<div>
					<button>
						<img
							src="/public/icons/audioPlayer/playlist.svg"
							alt=""
						/>
					</button>
				</div>
				<div>
					<button onClick={handleMute}>
						{audioVolume == 0 ? (
							<img
								src="/public/icons/audioPlayer/mute.svg"
								alt=""
							/>
						) : audioVolume > 0.7 ? (
							<img
								src="/public/icons/audioPlayer/maxVolume.svg"
								alt=""
							/>
						) : (
							<img
								src="/public/icons/audioPlayer/lowVolume.svg"
								alt=""
							/>
						)}
					</button>
					<RangeInput
						ref={rangeInputVolumeRef}
						type="range"
						min={0}
						max={1}
						step={0.1}
						value={audioVolume}
						onChange={handleVolumeChange}
					/>
				</div>
				<div>
					<button>
						<img
							src="/public/icons/audioPlayer/maximiseScreen.svg"
							alt=""
						/>
					</button>
				</div>
			</RightDiv>
		</AudioPlayer>
	);
};

export default MyAudioPlayer;
