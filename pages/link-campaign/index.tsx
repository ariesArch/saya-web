import { css } from "@emotion/react";
import { NextPageContext } from "next";

import DefaultLayout from "@/layouts/DefaultLayout";
import { redirectOnEitherSide } from "@/utils/index";

const LinkCampaignPage = () => {
    return (
        <DefaultLayout>
            <div css={container}>Link Campaign</div>
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

LinkCampaignPage.getInitialProps = (ctx: NextPageContext) => {
    const { res } = ctx;
    redirectOnEitherSide(res, "/");
};

export default LinkCampaignPage;
