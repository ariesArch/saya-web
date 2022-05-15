import { FC, useState } from "react";
import useSound from "use-sound";

import SpeakerIcon from "@/public/icons/speaker.svg";

import * as styles from "./QuizAudioPlayer.styles";

interface Props {
    url: string;
}

const QuizAudioPlayer: FC<Props> = ({ url }) => {
    const [play] = useSound(url, {
        onend: () => onEnd(),
    });
    const [isPlaying, setIsPlaying] = useState(false);

    const onEnd = () => setIsPlaying(false);

    const onPlay = () => {
        setIsPlaying(true);
        play();
    };

    return (
        <div css={styles.quizAudioPlayer}>
            {isPlaying ? (
                <div css={styles.preloader}>
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                </div>
            ) : (
                <button css={styles.speakerButton} onClick={onPlay}>
                    <SpeakerIcon />
                </button>
            )}
        </div>
    );
};

export default QuizAudioPlayer;
