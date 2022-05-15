import { css } from "@emotion/react";
import { useSelector } from "react-redux";

import Calendar from "@/components/calendar/calendar/Calendar.component";
import CalendarHeader from "@/components/calendar/Header/Header.component";
import SidePanel from "@/components/calendar/SidePanel/SidePanel.component";
import GoPremiumPopupBtn from "@/components/common/GoPremiumPopupBtn/GoPremiumPopupBtn.component";
import SideNav from "@/components/common/SideNav/SideNav.component";
import { ReduxState } from "@/interfaces/redux.interfaces";
import DefaultLayout from "@/layouts/DefaultLayout";

const HomeLayout = () => {
    const { is_premium } = useSelector((state: ReduxState) => state.userState.userData);

    return (
        <DefaultLayout>
            <div css={body}>
                <div css={contents}>
                    <SideNav />
                    <CalendarHeader />
                    <div css={mainContents}>
                        <Calendar />
                    </div>
                </div>

                <div css={sidePanel}>
                    <SidePanel />
                </div>

                {!is_premium && <GoPremiumPopupBtn />}
            </div>
        </DefaultLayout>
    );
};

const body = css`
    box-sizing: inherit;
    width: 100%;
    flex-grow: 1;
    display: flex;
    background-color: #fff;
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

const sidePanel = css`
    padding: 2rem;
    position: sticky;
    top: 0;
    right: 0;
    z-index: 100;
    height: 100vh;
    flex-shrink: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background-color: #fcfcfc;
`;

export default HomeLayout;
