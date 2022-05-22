import { css } from "@emotion/react";

import ChangePhoneForm from "@/components/change-phone-number/ChangePhoneForm/ChangePhoneForm.component";
import HomeLayout from "@/layouts/HomeLayout";

const EditProfilePage = () => {
    return (
        <HomeLayout
            showSidePanel={false}
            heading="Change Phone Number"
            backgroundColor="#fbfbfb"
            contentsStyles={{ paddingBottom: 0 }}>
            <div css={container}>
                <div css={card}>
                    <ChangePhoneForm />
                </div>
            </div>
        </HomeLayout>
    );
};

const container = css`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 8rem;

    @media only screen and (max-width: 695px) {
        padding: 0 5rem 10rem;
    }

    @media only screen and (max-width: 545px) {
        padding: 0 0 10rem;
    }
`;

const card = css`
    width: 60rem;
    background-color: #fff;
    padding: 3rem 4rem;
    border-radius: 2rem;
    flex-grow: 1;
    margin: 0 auto;
    border: 1px solid #eee;
    height: fit-content;

    @media only screen and (max-width: 745px) {
        width: 100%;
    }

    @media only screen and (max-width: 695px) {
        padding: 3rem;
    }
`;

export default EditProfilePage;
