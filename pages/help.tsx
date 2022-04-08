import { css } from "@emotion/react";

import DefaultLayout from "@/layouts/DefaultLayout";

const HelpPage = () => {
    return (
        <DefaultLayout>
            <div css={container}>HelpPage</div>
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

export default HelpPage;
