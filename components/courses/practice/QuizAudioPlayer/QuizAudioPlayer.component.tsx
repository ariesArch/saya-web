import { css } from "@emotion/react";
import { FC, useEffect, useState } from "react";
import useSound from "use-sound";

import AudioPause from "@/public/icons/audio-pause.svg";
import AudioPlay from "@/public/icons/audio-play.svg";
import AudioStartOver from "@/public/icons/audio-start-over.svg";

interface Props {
    url: string;
}

interface CurrTime {
    min: number;
    sec: number;
}

const QuizAudioPlayer: FC<Props> = ({ url }) => {
    const [play, { pause, duration, sound }] = useSound(url, {
        onend: () => onEnd(),
    });
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const playingButton = () => {
        if (isPlaying) {
            pause(); // this will pause the audio
            setIsPlaying(false);
        } else {
            play(); // this will play the audio
            setIsPlaying(true);
        }
    };
    const onEnd = () => setIsPlaying(false);
    const [currTime, setCurrTime] = useState<CurrTime>({
        min: 0,
        sec: 0,
    }); // current position of the audio in minutes and seconds

    const [seconds, setSeconds] = useState<number>(0);
    useEffect(() => {
        const interval = setInterval(() => {
            if (sound) {
                setSeconds(sound.seek([])); // setting the seconds state with the current state
                const min = Math.floor(sound.seek([]) / 60);
                const sec = Math.floor(sound.seek([]) % 60);
                setCurrTime({
                    min,
                    sec,
                });
            }
        }, 100);
        return () => clearInterval(interval);
    }, [sound]);
    const audioWrapper = css`
        display: flex;
        align-items: center;
        border-radius: 28px;
        padding: 8px;
        background: var(--neutral-n-200, #c5c5c5);
        & > * {
            flex: 1;
        }
    `;
    return (
        <div css={audioWrapper}>
            <button onClick={playingButton}>{isPlaying ? <AudioPause /> : <AudioPlay />}</button>
            <input
                style={{ cursor: "pointer", flex: "6" }}
                type="range"
                min="0"
                max={duration / 1000}
                value={seconds}
                className="timeline"
                onChange={(e) => {
                    if (sound) {
                        sound.seek([e.target.value]);
                    }
                }}
            />
            {/* <audio controls>
                    <source src={url} type="audio/ogg" />
                    Your browser does not support the audio element.
                </audio> */}
            <button onClick={() => sound.seek([0])}>
                <AudioStartOver />
            </button>
        </div>
    );
};

export default QuizAudioPlayer;
