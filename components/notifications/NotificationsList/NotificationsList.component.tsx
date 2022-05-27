import { useSelector } from "react-redux";

import NotificationsItem from "@/components/notifications/NotificationsItem/NotificationsItem.component";
import { ReduxState } from "@/interfaces/redux.interfaces";

import * as styles from "./NotificationsList.styles";

const NotificationsList = () => {
    const { notifications } = useSelector((state: ReduxState) => ({
        notifications: state.notificationsState.notifications,
    }));

    return (
        <div css={styles.container}>
            {notifications.length ? (
                <div css={styles.list}>
                    {notifications.map(({ id, title, message, notification_type, created_at, is_read }) => (
                        <NotificationsItem
                            key={id}
                            id={id}
                            title={title}
                            text={message}
                            type={notification_type}
                            createdAt={created_at}
                            isRead={is_read}
                        />
                    ))}
                </div>
            ) : (
                <div css={styles.emptyMessageContainer}>You don&apos;t have any notifications right now.</div>
            )}
        </div>
    );
};

export default NotificationsList;
