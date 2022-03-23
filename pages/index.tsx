import { css } from "@emotion/react";

import DefaultLayout from "@/layouts/DefaultLayout";

export default function Home() {
    return (
        <DefaultLayout>
            <div css={container}>
                <h1>Home</h1>
            </div>
        </DefaultLayout>
    );
}

const container = css`
    flex-grow: 1;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
