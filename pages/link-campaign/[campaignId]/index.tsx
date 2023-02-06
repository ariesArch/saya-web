import { css } from "@emotion/react";
import { format, parseISO } from "date-fns";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "@/components/common/Button/Button.component";
import { contentsVariant, illuVariants, landingAnimationConfig } from "@/components/common/FramerMotion";
import GoPremiumModal from "@/components/common/GoPremiumModal/GoPremiumModal.component";
import Separator from "@/components/common/Separator/Separator.components";
import TopBar from "@/components/common/TopBar/TopBar.component";
import CopyCouponCode from "@/components/link-campaign/CopyCouponCode/CopyCouponCode.component";
import TimeCountDown from "@/components/link-campaign/TimeCountDown/TimeCountDown.component";
import { ReduxState } from "@/interfaces/redux.interfaces";
import UnauthedLayout from "@/layouts/UnauthedLayout";
import DotsIllu from "@/public/images/faq-dots.svg";
import Dots from "@/public/images/platforms-dots.svg";
import { fetchCampaignInfoAsync, onPaymentModalToggle } from "@/store/payment/payment.actions";

const CampaignPage = () => {
    const router = useRouter();
    const { campaignId } = router.query;

    const { promotionCampaign, isPaymentModalOpen } = useSelector((state: ReduxState) => state.paymentState);
    const { id, short_des, des, start_date, end_date, promo_code } = promotionCampaign;

    const dispatch = useDispatch();

    const [isError, setIsError] = useState(false);

    const onFetchSuccess = () => {
        // on success
    };

    const onFetchFailure = () => {
        setIsError(true);
    };

    const onPaymentModalOpen = useCallback(() => {
        dispatch(onPaymentModalToggle(true));
    }, [dispatch]);

    const onPaymentModalClose = useCallback(() => {
        dispatch(onPaymentModalToggle(false));
    }, [dispatch]);

    useEffect(() => {
        if (!campaignId) return;

        dispatch(fetchCampaignInfoAsync(campaignId as string, onFetchSuccess, onFetchFailure));
    }, [campaignId, dispatch]);

    useEffect(() => {
        if (isError) {
            router.push("/");
        }
    }, [isError, router]);

    return (
        <UnauthedLayout topBar={<TopBar navItem={navItem} />}>
            {id && (
                <div css={container}>
                    <motion.div css={innerContainer} variants={contentsVariant} {...landingAnimationConfig}>
                        <div css={header}>
                            <h1 css={heading}>{short_des}</h1>
                            <h5 css={description}>{des}</h5>
                        </div>

                        <span css={endDateText}>
                            Promotion Ends in: <span>{format(parseISO(end_date), "LLLL dd")}</span>
                        </span>

                        <TimeCountDown startDate={parseISO(start_date)} endDate={parseISO(end_date)} />

                        <Button css={button} variant="contained" color="primary" onClick={onPaymentModalOpen}>
                            Get Promotion
                        </Button>

                        <Separator css={separator}>or</Separator>

                        <CopyCouponCode couponCode={promo_code} />
                    </motion.div>

                    <motion.div css={leftDots} variants={illuVariants} {...landingAnimationConfig}>
                        <Dots />
                    </motion.div>

                    <motion.div css={rightDots} variants={illuVariants} {...landingAnimationConfig}>
                        <DotsIllu />
                    </motion.div>
                </div>
            )}

            {isPaymentModalOpen && (
                <GoPremiumModal isOpen={isPaymentModalOpen} onClose={onPaymentModalClose} isCampaign />
            )}
        </UnauthedLayout>
    );
};

const container = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12rem 5rem 5rem;
    background-color: #fff;
    position: absolute;
`;

const innerContainer = css`
    max-width: 65rem;
    display: flex;
    flex-direction: column;
`;

const header = css`
    display: flex;
    flex-direction: column;
`;

const heading = css`
    font-size: 7rem;
    font-weight: 500;
    margin-bottom: 2rem;

    @media only screen and (max-width: 695px) {
        font-size: 6rem;
    }
`;

const description = css`
    font-size: 2.2rem;
    font-weight: 400;
    margin-bottom: 3rem;

    @media only screen and (max-width: 695px) {
        font-size: 2rem;
    }
`;

const endDateText = css`
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 1.5rem;

    span {
        color: var(--color-red-text);
    }
`;

const button = css`
    padding: 1rem 2rem;
    margin-top: 4rem;
`;

const separator = css`
    margin-top: 3rem;
    margin-bottom: 3rem;
`;

const leftDots = css`
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);

    @media only screen and (max-width: 695px) {
        display: none;
    }
`;

const rightDots = css`
    position: absolute;
    top: calc(50% - 4rem);
    right: 0;
    transform: translateY(-50%);
    width: 6rem;

    @media only screen and (max-width: 695px) {
        display: none;
    }

    svg {
        width: 100%;
        height: auto;
    }
`;

const navItem = {
    id: 2,
    name: "Campaigns",
    href: "/link-campaign",
};

export default CampaignPage;
