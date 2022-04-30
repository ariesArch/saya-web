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

    @media only screen and (max-width: 695px) {
        padding: 3rem 5rem 0;
    }

    @media only screen and (max-width: 545px) {
        padding: 3rem 0 0;
    }
`;

const card = css`
    background-color: #fff;
    padding: 5rem 10rem;
    border-radius: 2rem;
    flex-grow: 1;
    margin: 0 auto;
    border: 1px solid #eee;
    height: fit-content;

    @media only screen and (max-width: 695px) {
        padding: 5rem;
    }
`;

export default EditProfilePage;
