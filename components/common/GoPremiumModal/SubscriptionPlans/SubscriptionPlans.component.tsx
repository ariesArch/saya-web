import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SubscriptionPlanCard from "@/components/common/GoPremiumModal/SubscriptionPlanCard/SubscriptionPlanCard.component";
import { ReduxState } from "@/interfaces/redux.interfaces";
import BookIcon from "@/public/icons/book.svg";
import CrownIcon from "@/public/icons/crown.svg";
import LampChargeIcon from "@/public/icons/lamp-charge.svg";
import PlayCircleIcon from "@/public/icons/play-circle.svg";
import RadarIcon from "@/public/icons/radar.svg";
import { fetchSubscriptionPlansAsync } from "@/store/payment/payment.actions";

import * as styles from "./SubscriptionPlans.styles";

interface Props {
    onSelectPlan: (id: number) => void;
}

const SubscriptionPlans: FC<Props> = ({ onSelectPlan }) => {
    const dispatch = useDispatch();
    const plans = useSelector((state: ReduxState) => state.paymentState.subscriptionPlans);

    useEffect(() => {
        dispatch(fetchSubscriptionPlansAsync());
    }, [dispatch]);

    return (
        <div css={styles.plansContainer}>
            <div css={styles.header}>
                <div css={styles.headerIcon}>
                    <CrownIcon />
                </div>
                <h1 css={styles.heading}>Go SAYA Premium</h1>
            </div>

            <div css={styles.descriptions}>
                {descriptionItems.map(({ id, text, icon }) => (
                    <div key={id} css={styles.descriptionItem}>
                        {icon}

                        {text}
                    </div>
                ))}
            </div>

            <div css={styles.cardsContainer}>
                {plans.map((plan) => (
                    <SubscriptionPlanCard key={plan.id} data={plan} onClick={() => onSelectPlan(plan.id)} />
                ))}
            </div>
        </div>
    );
};

const descriptionItems = [
    {
        id: 1,
        text: "Video အားလုံးကြည့်ရှုနိုင်မည်",
        icon: <PlayCircleIcon />,
    },
    {
        id: 2,
        text: "Exercise များကို အကန့်အသတ်မရှိ လေ့ကျင့်နိုင်မည်",
        icon: <LampChargeIcon />,
    },
    {
        id: 3,
        text: "သင်ခန်းစာအားလုံးကို ရယူကြည့်ရှုနိုင်မည်",
        icon: <BookIcon />,
    },
    {
        id: 4,
        text: "Live Class အတန်းတိုင်းတက်ရောက်နိုင်မည်",
        icon: <RadarIcon />,
    },
];

export default SubscriptionPlans;
