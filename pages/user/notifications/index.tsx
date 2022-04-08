import { css } from "@emotion/react";

import HomeLayout from "@/layouts/HomeLayout";

const NotificationsPage = () => {
    return (
        <HomeLayout showSidePanel={false} heading="Notifications">
            <div css={container}>Notifications</div>
        </HomeLayout>
    );
};

const container = css`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
`;

export default NotificationsPage;
