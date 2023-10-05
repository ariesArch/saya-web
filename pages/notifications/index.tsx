import { css } from "@emotion/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

// import HeaderCarousel from "@/components/notifications/HeaderCarousel/HeaderCarousel.component";
// import NotificationsList from "@/components/notifications/NotificationsList/NotificationsList.component";
import TabNotifiation from "@/components/notifications/TabNotifiation/TabNotification.component";
import HomeLayout from "@/layouts/HomeLayout";
// import NotiBellIcon from "@/public/icons/noti-bell.svg";
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
        <HomeLayout showSidePanel={false} showHeaderNav={false}>
            {/* <HeaderCarousel /> */}
            <TabNotifiation />

            {/* <NotificationsList /> */}
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
