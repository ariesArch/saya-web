import { format, intervalToDuration } from "date-fns";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Button from "@/components/common/Button/Button.component";
import PopupButton from "@/components/common/PopupButton/PopupButton.component";
import { levelIcons } from "@/components/common/sharedData";
import ClassDetailsPopupContent from "@/components/home/live-class/ClassDetailsPopupContent/ClassDetailsPopupContent.component";
import { LiveEvent } from "@/interfaces/live-class.interfaces";
import NotificationIcon from "@/public/icons/notification.svg";
import RadarIcon from "@/public/icons/radar.svg";
import TimerIcon from "@/public/icons/timer.svg";
import VideoCameraIcon from "@/public/icons/video-camera.svg";
import { onRemoveClass, onUpdateClass } from "@/store/live-class/live-class.actions";

import * as styles from "./LiveClassCard.styles";

interface Props {
    isToday: boolean;
    data: LiveEvent;
    status?: "live" | "today" | "default";
}

const LiveClassCard: FC<Props> = ({ status = "default", isToday, data }) => {
    const { date, from, to, image_url, title, teacher_name, is_notify } = data;
    const dispatch = useDispatch();

    const [distance, setDistance] = useState({ hours: 0, minutes: 0, seconds: 0 });
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const onPopupToggle = () => setIsPopupOpen(!isPopupOpen);
    const onPopupClose = () => setIsPopupOpen(false);

    useEffect(() => {
        if (!isToday) return;

        const d = intervalToDuration({
            start: new Date(),
            end: new Date(`${date} ${from}`),
        });

        setDistance({
            hours: d.hours || 0,
            minutes: d.minutes || 0,
            seconds: d.seconds || 0,
        });

        const interval = setInterval(() => {
            const d = intervalToDuration({
                start: new Date(),
                end: new Date(`${date} ${from}`),
            });

            setDistance({
                hours: d.hours || 0,
                minutes: d.minutes || 0,
                seconds: d.seconds || 0,
            });

            // event is live now
            if (d.hours === 0 && d.minutes === 0 && (d.seconds || 0) < 1) {
                if (is_notify) {
                    // eslint-disable-next-line no-new
                    new Notification("A class is live now.", {
                        body: title,
                    });
                }

                dispatch(onUpdateClass({ ...data, is_live: true }));
            }

            // remove if the event is finished
            if (new Date(`${date} ${to}`).getTime() < new Date().getTime()) {
                dispatch(onRemoveClass(data.id));
                clearInterval(interval);
            }
        }, 1000);

        // eslint-disable-next-line consistent-return
        return () => clearInterval(interval);
    }, [data, date, dispatch, from, isToday, is_notify, status, title, to]);

    return (
        <div css={styles.container(status)}>
            <div css={styles.card}>
                <div css={styles.imageContainer}>
                    <Image src={image_url} alt="event photo" layout="fill" />
                </div>
                <div css={styles.classInfo}>
                    <div css={styles.date(is_notify)}>
                        {is_notify && <NotificationIcon />}
                        {format(new Date(date), "MMM dd, EEE")} | {from}
                    </div>
                    <div css={styles.mainTexts}>
                        <span css={styles.title}>{title}</span>
                        <div css={styles.subtitles}>
                            {levelIcons.intermediate} Intermediate . Tr. {teacher_name}
                        </div>
                    </div>

                    <div css={styles.buttonContainer}>
                        {status === "live" ? (
                            <Button variant="contained" color="success">
                                <VideoCameraIcon /> Join Now
                            </Button>
                        ) : (
                            <PopupButton
                                popupContent={<ClassDetailsPopupContent data={data} />}
                                open={isPopupOpen}
                                onClose={onPopupClose}
                                horizontalOffset={-200}
                                verticalOffset={-220}
                                onClick={onPopupToggle}>
                                <Button variant="contained" color="primary">
                                    Class details
                                </Button>
                            </PopupButton>
                        )}
                    </div>
                </div>
            </div>
            {status !== "default" && (
                <div css={styles.footer}>
                    {status === "live" && (
                        <div css={styles.liveText}>
                            <RadarIcon />
                            Going LIVE
                        </div>
                    )}

                    {status === "today" && (
                        <div css={styles.timer}>
                            <TimerIcon />
                            <span css={styles.timeCounter}>
                                <strong>{distance.hours}</strong>h : <strong>{distance.minutes}</strong>m :{" "}
                                <strong>{distance.seconds}</strong>s
                            </span>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default LiveClassCard;