import { css } from "@emotion/react";
import Head from "next/head";
import { ReactNode } from "react";

import SideNav from "@/components/common/SideNav/SideNav.component";

interface DefaultLayoutProps {
    title?: string;
    children: ReactNode;
}

const HomeLayout = (props: DefaultLayoutProps) => {
    const { title = "SAYA - The English Learning Platform", children } = props;
    return (
        <div css={container}>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div css={body}>
                <div css={contents}>
                    <SideNav />
                    <div css={mainContents}>{children}</div>
                </div>
                <div css={sidePanel} />
            </div>
        </div>
    );
};

const container = css`
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #f9f9f9;
`;

const body = css`
    box-sizing: inherit;
    width: 100%;
    flex-grow: 1;
    display: flex;
    padding-right: 5rem;
`;

export const contents = css`
    padding: 0 0 4rem 5rem;
    flex-grow: 1;
    border-right: 1px solid #eeeeee;
`;

export const mainContents = css`
    display: flex;
    flex-direction: column;
    padding: 3rem 4rem 2rem 10rem;
`;

export const sidePanel = css`
    padding: 2rem;
    position: sticky;
    top: 0;
    right: 0;
    z-index: 100;
    height: 100vh;
    width: 32rem;
    flex-shrink: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`;

export default HomeLayout;
