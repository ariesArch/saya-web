import { css } from "@emotion/react";

import EditProfileForm from "@/components/user/edit-profile/EditProfileForm/EditProfileForm.component";
import HomeLayout from "@/layouts/HomeLayout";

const EditProfilePage = () => {
    return (
        <HomeLayout showSidePanel={false} heading="Edit Profile" backgroundColor="#fbfbfb">
            <div css={container}>
                <div css={card}>
                    <EditProfileForm />
                </div>
            </div>
        </HomeLayout>
    );
};

const container = css`
    height: 100%;
    display: flex;
    padding: 3rem 10% 0;
`;

const card = css`
    background-color: #fff;
    padding: 5rem 10rem;
    border-radius: 2rem;
    flex-grow: 1;
    margin: 0 auto;
    border: 1px solid #eee;
`;

export default EditProfilePage;
