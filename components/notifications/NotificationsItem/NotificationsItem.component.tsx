import { formatDistance, parseISO } from "date-fns";
import { FC, ReactNode } from "react";
import { useDispatch } from "react-redux";

import { NotificationType } from "@/interfaces/notifications.interfaces";
import TickCircleIcon from "@/public/icons/correct.svg";
import { readNotificationAsync } from "@/store/notifications/notifications.actions";

import * as styles from "./NotificationsItem.styles";

interface Props {
    id: string;
    title: string;
    text: string;
    type: NotificationType;
    createdAt: string;
    isRead: 0 | 1;
}

const NotificationsItem: FC<Props> = ({ id, title, text, type, createdAt, isRead }) => {
    const dispatch = useDispatch();

    const onReadNotification = () => {
        if (isRead) return;
        dispatch(readNotificationAsync(id));
    };

    return (
        <div css={styles.item(!!isRead)} onMouseLeave={onReadNotification}>
            <div css={styles.iconContainer}>{icons[type] || icons.general_announcement}</div>
            <div css={styles.contents}>
                <span css={styles.title}>{title}</span>
                <div css={styles.text} dangerouslySetInnerHTML={{ __html: text }} />
            </div>
            <div css={styles.statusContainer}>{!isRead && <div css={styles.status} />}</div>
            <div css={styles.dateContainer}>
                <span css={styles.date}>{formatDistance(parseISO(createdAt), new Date())} ago</span>
            </div>
        </div>
    );
};

const icons: Record<NotificationType, ReactNode> = {
    general_announcement: <TickCircleIcon color="var(--color-green)" />,
    new_course: <TickCircleIcon color="var(--color-green)" />,
    custom_message_to_specific_users: <TickCircleIcon color="var(--color-blue)" />,
};

export default NotificationsItem;
