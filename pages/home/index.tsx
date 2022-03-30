import { css } from "@emotion/react";

import DefaultLayout from "@/layouts/DefaultLayout";

const HomePage = () => {
    return (
        <DefaultLayout>
            <div css={container}>Home</div>
        </DefaultLayout>
    );
};

const container = css`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
`;

export default HomePage;
