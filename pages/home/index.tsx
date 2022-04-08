import { css } from "@emotion/react";
import { NextPageContext } from "next";

import DefaultLayout from "@/layouts/DefaultLayout";
import { redirectOnEitherSide } from "@/utils/index";

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

HomePage.getInitialProps = (ctx: NextPageContext) => {
    const { res } = ctx;
    redirectOnEitherSide(res, "/home/classroom");
};

export default HomePage;
