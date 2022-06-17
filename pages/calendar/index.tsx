import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Calendar from "@/components/calendar/calendar/Calendar.component";
import CalendarHeader from "@/components/calendar/Header/Header.component";
import SideModal from "@/components/calendar/SideModal/SideModal.component";
import SidePanel from "@/components/calendar/SidePanel/SidePanel.component";
import { clickEffect } from "@/components/common/commonStyles";
import GoPremiumPopupBtn from "@/components/common/GoPremiumPopupBtn/GoPremiumPopupBtn.component";
import SideNav from "@/components/common/SideNav/SideNav.component";
import { ReduxState } from "@/interfaces/redux.interfaces";
import DefaultLayout from "@/layouts/DefaultLayout";
import CalenderIcon from "@/public/icons/calendar.svg";
import { fetchCalendarDataAsync } from "@/store/calendar/calendar.actions";

const HomeLayout = () => {
    const { is_premium } = useSelector((state: ReduxState) => state.userState.userData);
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const onModalOpen = () => setIsModalOpen(true);
    const onModalClose = () => setIsModalOpen(false);

    useEffect(() => {
        dispatch(fetchCalendarDataAsync());
    }, []);

    return (
        <DefaultLayout>
            <div css={body}>
                <div css={contents}>
                    <SideNav />
                    <CalendarHeader />

                    <div css={mainContents}>
                        <Calendar />
                    </div>

                    <button css={navBtn} onClick={onModalOpen}>
                        <CalenderIcon />
                    </button>
                </div>

                <div css={sidePanel}>
                    <SidePanel />
                </div>

                {isModalOpen && (
                    <SideModal isOpen={isModalOpen} onClose={onModalClose}>
                        <SidePanel />
                    </SideModal>
                )}
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

    @media only screen and (max-width: 1175px) {
        flex-direction: column;
    }
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

    @media only screen and (max-width: 595px) {
        padding: 4rem 2rem 4rem 0;
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

    @media only screen and (max-width: 1175px) {
        display: none;
    }
`;

export const navBtn = css`
    display: none;
    position: fixed;
    right: 1rem;
    top: 1rem;
    z-index: 100;
    width: 6rem;
    height: 6rem;
    ${clickEffect};

    svg {
        width: 100%;
        height: 100%;
    }

    @media only screen and (max-width: 1175px) {
        display: flex;
    }
`;

export default HomeLayout;
