import { css } from "@emotion/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import HeaderCarousel from "@/components/notifications/HeaderCarousel/HeaderCarousel.component";
import NotificationsList from "@/components/notifications/NotificationsList/NotificationsList.component";
import HomeLayout from "@/layouts/HomeLayout";
import NotiBellIcon from "@/public/icons/noti-bell.svg";
import {
    getAllNotificationsAsync,
    getNotificationsAdsAsync,
} from "@/store/notifications/notifications.actions";

const NotificationsPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllNotificationsAsync());
        dispatch(getNotificationsAdsAsync());
    }, []);

    return (
        <HomeLayout
            showSidePanel={false}
            heading={
                <h5 css={heading}>
                    <NotiBellIcon /> Notifications
                </h5>
            }
            mainContentsStyles={{ padding: 0 }}>
            <HeaderCarousel />

            <NotificationsList />
        </HomeLayout>
    );
};

const heading = css`
    color: var(--color-primary);
    display: flex;
    align-items: center;

    svg {
        width: 2.5rem;
        height: auto;
        margin-right: 1rem;
    }
`;

export default NotificationsPage;
