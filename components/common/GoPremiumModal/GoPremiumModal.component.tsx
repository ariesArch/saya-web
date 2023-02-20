// eslint-disable-next-line import/no-extraneous-dependencies
import "simplebar-react/dist/simplebar.min.css";

import { FC, useMemo, useState } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import SimpleBar from "simplebar-react";

import ClientOnlyModal from "@/components/common/ClientOnlyModal/ClientOnlyModal.component";
import MakePayment from "@/components/common/GoPremiumModal/MakePayment/MakePayment.component";
import SubscriptionPlans from "@/components/common/GoPremiumModal/SubscriptionPlans/SubscriptionPlans.component";
import { GoPremiumModalContext } from "@/components/common/GoPremiumModal/utils";
import CloseCircleIcon from "@/public/icons/close-circle.svg";
import GoPremiumIllu from "@/public/images/go-premium-illu.svg";
import { recaptchaSiteKey } from "@/utils/constants";

import * as styles from "./GoPremiumModal.styles";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    isCampaign?: boolean;
}

const GoPremiumModal: FC<Props> = ({ isOpen, onClose, isCampaign = false }) => {
    const [selectedPlan, setSelectedPlan] = useState(0);

    const onSelectPlan = (id: number) => {
        setSelectedPlan(id);
    };

    const contextValue = useMemo(() => ({ isCampaign }), [isCampaign]);

    return (
        <ClientOnlyModal>
            <GoPremiumModalContext.Provider value={contextValue}>
                <div css={styles.modal(isOpen)}>
                    <button css={styles.closeButton} onClick={onClose}>
                        <CloseCircleIcon />
                    </button>
                    <div css={styles.modalContents}>
                        <div css={styles.illuContainer}>
                            <GoPremiumIllu />
                        </div>
                        <SimpleBar css={styles.mainContents}>
                            {!selectedPlan ? (
                                <SubscriptionPlans isOpen={isOpen} onSelectPlan={onSelectPlan} />
                            ) : !isCampaign ? (
                                <MakePayment
                                    isOpen={isOpen}
                                    selectedPlanId={selectedPlan}
                                    onGoBack={() => setSelectedPlan(0)}
                                />
                            ) : (
                                <GoogleReCaptchaProvider reCaptchaKey={recaptchaSiteKey as string}>
                                    <MakePayment
                                        isOpen={isOpen}
                                        selectedPlanId={selectedPlan}
                                        onGoBack={() => setSelectedPlan(0)}
                                    />
                                </GoogleReCaptchaProvider>
                            )}
                        </SimpleBar>
                    </div>
                </div>
            </GoPremiumModalContext.Provider>
        </ClientOnlyModal>
    );
};

export default GoPremiumModal;
