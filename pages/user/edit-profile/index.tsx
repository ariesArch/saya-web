import { css } from "@emotion/react";

import HomeLayout from "@/layouts/HomeLayout";

const EditProfilePage = () => {
    return (
        <HomeLayout showSidePanel={false} heading="Edit Profile">
            <div css={container}>Edit Profile</div>
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

export default EditProfilePage;
