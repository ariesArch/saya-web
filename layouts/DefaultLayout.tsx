import { css } from "@emotion/react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ReduxState } from "@/interfaces/redux.interfaces";
import { onPaymentModalToggle } from "@/store/payment/payment.actions";

const CompleteProfileModal = dynamic(
    () => import("@/components/common/CompleteProfileModal/CompleteProfileModal.component")
);
const GoPremiumModal = dynamic(() => import("@/components/common/GoPremiumModal/GoPremiumModal.component"));

interface DefaultLayoutProps {
    title?: string;
    topBar?: ReactNode;
    children: ReactNode;
}

const DefaultLayout = (props: DefaultLayoutProps) => {
    const { title = "SAYA - The English Learning Platform", topBar, children } = props;
    const { isOpen, userData } = useSelector((state: ReduxState) => ({
        isOpen: true,
        userData: state.userState.userData,
    }));
    const dispatch = useDispatch();

    const onClose = () => dispatch(onPaymentModalToggle(false));

    return (
        <div css={container}>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, minimum-scale=1" />
            </Head>
            {topBar && <header>{topBar}</header>}
            <div css={body}>{children}</div>

            <GoPremiumModal isOpen={isOpen} onClose={onClose} />

            {userData.phone && (userData.is_new_user || !userData.name) && <CompleteProfileModal />}
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
    flex-direction: column;
`;

export default DefaultLayout;
