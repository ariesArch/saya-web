import { css } from "@emotion/react";
import Head from "next/head";
import { ReactNode } from "react";

import GoPremiumPopupBtn from "@/components/common/GoPremiumPopupBtn/GoPremiumPopupBtn.component";
import SideNav from "@/components/common/SideNav/SideNav.component";
import WeeklyScheduler from "@/components/common/WeeklyScheduler/WeeklyScheduler.component";
import HeaderNav from "@/components/home/HeaderNav/HeaderNav.component";
import RankTable from "@/components/home/RankTable/RankTable.component";

interface DefaultLayoutProps {
    title?: string;
    children: ReactNode;
    showSidePanel?: boolean;
    heading?: ReactNode;
}

const HomeLayout = (props: DefaultLayoutProps) => {
    const { title = "SAYA - The English Learning Platform", showSidePanel = true, heading, children } = props;
    return (
        <div css={container}>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div css={body}>
                <div css={contents}>
                    <SideNav />
                    <HeaderNav heading={heading} />
                    <div css={mainContents}>{children}</div>
                </div>
                {showSidePanel && (
                    <div css={sidePanelContainer}>
                        <WeeklyScheduler />
                        <RankTable />
                    </div>
                )}

                <GoPremiumPopupBtn />
            </div>
        </div>
    );
};

const container = css`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const body = css`
    box-sizing: inherit;
    width: 100%;
    flex-grow: 1;
    display: flex;
`;

export const contents = css`
    padding: 0 0 4rem 5rem;
    flex-grow: 1;
    border-right: 1px solid #eeeeee;
    display: flex;
    flex-direction: column;
`;

export const mainContents = css`
    display: flex;
    flex-direction: column;
    padding: 2rem 4rem 2rem 7rem;
    flex-grow: 1;
`;

export const sidePanelContainer = css`
    background-color: var(--color-background-gray);
    padding: 2rem;
    position: sticky;
    top: 0;
    right: 0;
    z-index: 100;
    height: 100vh;
    width: 38rem;
    flex-shrink: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`;

export default HomeLayout;
