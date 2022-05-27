import { css } from "@emotion/react";
import { CSSProperties, Fragment, ReactNode } from "react";
import { useSelector } from "react-redux";

import GoPremiumPopupBtn from "@/components/common/GoPremiumPopupBtn/GoPremiumPopupBtn.component";
import SideNav from "@/components/common/SideNav/SideNav.component";
// import WeeklyScheduler from "@/components/common/WeeklyScheduler/WeeklyScheduler.component";
import HeaderNav from "@/components/home/HeaderNav/HeaderNav.component";
import { ReduxState } from "@/interfaces/redux.interfaces";
// import RankTable from "@/components/home/RankTable/RankTable.component";
import DefaultLayout from "@/layouts/DefaultLayout";

interface HomeLayoutProps {
    title?: string;
    children: ReactNode;
    showSidePanel?: boolean;
    heading?: ReactNode;
    backgroundColor?: string;
    contentsStyles?: CSSProperties;
    mainContentsStyles?: CSSProperties;
}

const HomeLayout = (props: HomeLayoutProps) => {
    const {
        title = "SAYA - The English Learning Platform",
        showSidePanel = true,
        heading,
        children,
        backgroundColor = "#fff",
        contentsStyles,
        mainContentsStyles,
    } = props;
    const { is_premium } = useSelector((state: ReduxState) => state.userState.userData);

    return (
        <DefaultLayout title={title}>
            <div css={body(backgroundColor)}>
                <div css={contents} style={contentsStyles}>
                    <SideNav />
                    <HeaderNav heading={heading} />
                    <div css={mainContents} style={mainContentsStyles}>
                        {children}
                    </div>
                </div>
                {showSidePanel && (
                    <Fragment />
                    // <div css={sidePanelContainer}>
                    //     <WeeklyScheduler />
                    //     <RankTable />
                    // </div>
                )}

                {!is_premium && <GoPremiumPopupBtn />}
            </div>
        </DefaultLayout>
    );
};

const body = (backgroundColor: string) => css`
    box-sizing: inherit;
    width: 100%;
    flex-grow: 1;
    display: flex;
    background-color: ${backgroundColor};
`;

const contents = css`
    padding: 0 0 4rem 5rem;
    flex-grow: 1;
    border-right: 1px solid #eeeeee;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 695px) {
        padding-left: 0;
        padding-bottom: 8rem;
    }
`;

const mainContents = css`
    display: flex;
    flex-direction: column;
    padding: 2rem 4rem 2rem 7rem;
    flex-grow: 1;

    @media only screen and (max-width: 695px) {
        padding: 2rem;
    }
`;

// const sidePanelContainer = css`
//     background-color: var(--color-background-gray);
//     padding: 2rem;
//     position: sticky;
//     top: 0;
//     right: 0;
//     z-index: 100;
//     height: 100vh;
//     width: 38rem;
//     flex-shrink: 0;
//     overflow: hidden;
//     display: flex;
//     flex-direction: column;
// `;

export default HomeLayout;
