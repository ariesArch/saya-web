import { css } from "@emotion/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import HomeLayout from "@/layouts/HomeLayout";
import { getAllNotifications } from "@/store/notifications/notifications.actions";

const NotificationsPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllNotifications());
    }, []);

    return (
        <HomeLayout showSidePanel={false} heading="Notifications">
            <div css={container}>You don&apos;t have any notifications right now.</div>
        </HomeLayout>
    );
};

const container = css`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
`;

export default NotificationsPage;
