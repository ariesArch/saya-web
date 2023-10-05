import { formatDistance, parseISO } from "date-fns";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { NotificationItem } from "@/interfaces/notifications.interfaces";
import { ReduxState } from "@/interfaces/redux.interfaces";
import NotificationIcon from "@/public/icons/notification-icon.svg";
import { readNotificationAsync } from "@/store/notifications/notifications.actions";

import * as styles from "./TabNotification.styles";

const TabNotifiation = () => {
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState<number>(0);
    const handleTabClick = (index) => {
        setActiveTab(index as number);
    };
    const tabs = [
        {
            index: 0,
            type: "Tip",
            name: "Lesson Tips",
        },
        {
            index: 1,
            type: "Marketing Message",
            name: "General",
        },
    ];
    const { notifications } = useSelector((state: ReduxState) => ({
        notifications: state.notificationsState.notifications,
    }));
    const [unreadNotifications, setUnreadNotifications] = useState(0);
    const [filteredNotifications, setFilteredNotifications] = useState<NotificationItem[]>([]);
    useEffect(() => {
        // Filter notifications based on the active tab
        const filtered = notifications.filter(
            (notification) => tabs[activeTab].type === notification.notification_category
        );
        const unread = notifications.filter((noti) => !noti.is_read);
        setUnreadNotifications(unread.length);
        setSelectedNotification(filtered[0]);
        setFilteredNotifications(filtered);
    }, [activeTab, notifications]);

    // handling noti
    const [selectedNotification, setSelectedNotification] = useState<NotificationItem>();
    const onReadNotification = (notiId) => {
        const noti = filteredNotifications.find((fn) => fn.id === notiId);
        setSelectedNotification(noti);
        if (!noti.is_read) {
            dispatch(readNotificationAsync(notiId as string));
        }
    };
    const renderNotification = () => {
        const renderedUI = `<div style="
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;">
        <h3 style="color: var(--neutral-n-700, #363636);
        /* Heading/H-3/Semibold */
        font-family: Gelion;
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: 48px;">${selectedNotification.title}</h3><p>${selectedNotification.message}</p></div>`;
        return renderedUI;
    };

    return (
        <div css={styles.container}>
            <div css={styles.wrapper}>
                <div css={styles.leftTab}>
                    <div css={styles.tabWrapper}>
                        <div css={styles.tabHeading}>
                            <h3 css={styles.tabHeader}>Notification</h3>
                            <h6>
                                {notifications.length} notifications , {unreadNotifications} unread
                            </h6>
                        </div>
                        <div css={styles.tabMenu}>
                            {tabs.map((tab, index) => (
                                <div
                                    key={index}
                                    css={styles.tab(index === activeTab)}
                                    onClick={() => handleTabClick(index)}>
                                    {tab.name}
                                </div>
                            ))}
                        </div>
                        {filteredNotifications.length ? (
                            <>
                                {filteredNotifications.map(
                                    ({ id, title, short_description, created_at, is_read }) => (
                                        <div
                                            css={styles.notiList(selectedNotification.id === id)}
                                            key={id}
                                            onClick={() => onReadNotification(id)}>
                                            {!is_read && <span css={styles.readIcon} />}
                                            <div css={styles.notiItem}>
                                                <NotificationIcon css={styles.notiIcon} />
                                                <div>
                                                    <div css={styles.notiTitle}>
                                                        <h3>{title}</h3>
                                                        <span>
                                                            {formatDistance(parseISO(created_at), new Date())}{" "}
                                                            ago
                                                        </span>
                                                    </div>
                                                    <div
                                                        dangerouslySetInnerHTML={{
                                                            __html: short_description,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                )}
                            </>
                        ) : (
                            <div css={styles.emptyMessageContainer}>
                                You don&apos;t have any notifications right now.
                            </div>
                        )}
                    </div>
                </div>
                {selectedNotification && (
                    <div css={styles.tabContent}>
                        <div dangerouslySetInnerHTML={{ __html: renderNotification() }} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default TabNotifiation;
