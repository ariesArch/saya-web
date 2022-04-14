import { FC } from "react";

import SubscriptionPlans from "@/components/common/GoPremiumModal/SubscriptionPlans/SubscriptionPlans.component";
import BookIcon from "@/public/icons/book.svg";
import CloseCircleIcon from "@/public/icons/close-circle.svg";
import CrownIcon from "@/public/icons/crown.svg";
import LampChargeIcon from "@/public/icons/lamp-charge.svg";
import PlayCircleIcon from "@/public/icons/play-circle.svg";
import RadarIcon from "@/public/icons/radar.svg";
import GoPremiumIllu from "@/public/images/go-premium-illu.svg";

import * as styles from "./GoPremiumModal.styles";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const GoPremiumModal: FC<Props> = ({ isOpen, onClose }) => {
    return (
        <div css={styles.modal(isOpen)}>
            <button css={styles.closeButton} onClick={onClose}>
                <CloseCircleIcon />
            </button>
            <div css={styles.modalContents}>
                <div css={styles.illuContainer}>
                    <GoPremiumIllu />
                </div>
                <div css={styles.mainContents}>
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

                    <SubscriptionPlans />
                </div>
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

export default GoPremiumModal;
