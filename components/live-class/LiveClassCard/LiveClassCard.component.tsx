import { format, intervalToDuration, parseISO } from "date-fns";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import Button from "@/components/common/Button/Button.component";
import { levelData } from "@/components/common/sharedData";
import ClassDetailsPopupContent from "@/components/live-class/ClassDetailsPopupContent/ClassDetailsPopupContent.component";
import { LiveEvent } from "@/interfaces/live-class.interfaces";
import NotificationIcon from "@/public/icons/notification.svg";
import RadarIcon from "@/public/icons/radar.svg";
import TimerIcon from "@/public/icons/timer.svg";
import VideoCameraIcon from "@/public/icons/video-camera.svg";
import { onRemoveClass, onUpdateClass } from "@/store/live-class/live-class.actions";
import { convertTo24hr, convertTZ } from "@/utils/date-time";

import * as styles from "./LiveClassCard.styles";

interface Props {
    isToday: boolean;
    data: LiveEvent;
    status?: "live" | "today" | "default";
}

const LiveClassCard: FC<Props> = ({ status = "default", isToday, data }) => {
    const {
        date_time_from,
        date_time_to,
        image_url,
        title,
        teacher_name,
        is_notify,
        level,
        zoom_meeting_id,
    } = data;

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const convertedDate = format(convertTZ(date_time_from + " UTC", timezone), "yyyy-MM-dd");
    const convertedFrom = format(convertTZ(date_time_from + " UTC", timezone), "hh:mm aa");

    console.log(convertedDate);

    const dispatch = useDispatch();

    const [distance, setDistance] = useState({ hours: 0, minutes: 0, seconds: 0 });
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const buttonRef = useRef(null);

    const onPopupToggle = () => setIsPopupOpen(!isPopupOpen);
    const onPopupClose = () => setIsPopupOpen(false);

    useEffect(() => {
        if (!isToday) return;

        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        const date = format(convertTZ(date_time_from + " UTC", timezone), "yyyy-MM-dd");
        const from = format(convertTZ(date_time_from + " UTC", timezone), "hh:mm aa");
        const to = format(convertTZ(date_time_to + " UTC", timezone), "hh:mm aa");

        const d = intervalToDuration({
            start: new Date(),
            end: parseISO(`${date} ${convertTo24hr(from)}`),
        });

        setDistance({
            hours: d.hours || 0,
            minutes: d.minutes || 0,
            seconds: d.seconds || 0,
        });

        const interval = setInterval(() => {
            const d = intervalToDuration({
                start: new Date(),
                end: parseISO(`${date} ${convertTo24hr(from)}`),
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
                        icon: "/favicon-32x32.png",
                    });
                }

                dispatch(onUpdateClass({ ...data, is_live: true }));
            }

            // remove if the event is finished
            if (parseISO(`${date} ${convertTo24hr(to)}`).getTime() < new Date().getTime()) {
                dispatch(onRemoveClass(data.id));
                clearInterval(interval);
            }
        }, 1000);

        // eslint-disable-next-line consistent-return
        return () => clearInterval(interval);
    }, [data, date_time_from, date_time_to, dispatch, isToday, is_notify, status, title]);

    return (
        <div css={styles.container(status)}>
            <div css={styles.card}>
                <div css={styles.imageContainer}>
                    <Image src={image_url} alt="event photo" layout="fill" />
                </div>
                <div css={styles.classInfo}>
                    <div css={styles.date(is_notify)}>
                        {is_notify && <NotificationIcon />}
                        {format(parseISO(convertedDate), "MMM dd, EEE")} | {convertedFrom}
                    </div>
                    <div css={styles.mainTexts}>
                        <span css={styles.title}>{title}</span>
                        <div css={styles.subtitles}>
                            {levelData[level]?.icon} {levelData[level]?.name} . Tr. {teacher_name}
                        </div>
                    </div>

                    <div css={styles.buttonContainer}>
                        {status === "live" ? (
                            <a
                                href={`/live-class/join/${encodeURIComponent(zoom_meeting_id)}`}
                                target="_blank"
                                rel="noreferrer">
                                <Button variant="contained" color="success">
                                    <VideoCameraIcon /> Join Now
                                </Button>
                            </a>
                        ) : (
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={onPopupToggle}
                                ref={buttonRef}>
                                Class details
                            </Button>
                        )}
                    </div>
                </div>

                {isPopupOpen && (
                    <ClassDetailsPopupContent data={data} buttonRef={buttonRef} onPopupClose={onPopupClose} />
                )}
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
