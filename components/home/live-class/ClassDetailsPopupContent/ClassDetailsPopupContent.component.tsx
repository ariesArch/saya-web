import { format } from "date-fns";
import Image from "next/image";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";

import Button from "@/components/common/Button/Button.component";
import { levelIcons } from "@/components/common/sharedData";
import { LiveEvent } from "@/interfaces/live-class.interfaces";
import CrownCircleIcon from "@/public/icons/crown-circle.svg";
import NotificationIcon from "@/public/icons/notification.svg";
import { onLiveClassNotifyToggleAsync } from "@/store/live-class/live-class.actions";

import * as styles from "./ClassDetailsPopupContent.styles";

interface Props {
    data: LiveEvent;
}

const ClassDetailsPopupContent: FC<Props> = ({ data }) => {
    const { uuid, image_url, teacher_name, title, date, from, description, is_notify } = data;
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const onNotifyToggle = () => {
        setIsLoading(true);
        dispatch(onLiveClassNotifyToggleAsync({ uuid, is_notify }, () => setIsLoading(false)));
    };

    return (
        <div css={styles.container}>
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

                <div css={styles.syllabus}>
                    <span css={styles.syllabusTitle}>Course Syllabus</span>
                    <p css={styles.syllabusText}>{description}</p>
                </div>

                <div css={styles.buttonContainer}>
                    <CrownCircleIcon />

                    <Button variant="contained" color="success" onClick={onNotifyToggle} loading={isLoading}>
                        <NotificationIcon />
                        {is_notify ? "Unnotify" : "Get notify"}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ClassDetailsPopupContent;
