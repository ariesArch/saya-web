import { css } from "@emotion/react";

import HomeLayout from "@/layouts/HomeLayout";

const NotificationsPage = () => {
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
