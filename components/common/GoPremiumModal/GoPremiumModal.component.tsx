import { FC, useState } from "react";
import SimpleBar from "simplebar-react";

import ClientOnlyModal from "@/components/common/ClientOnlyModal/ClientOnlyModal.component";
import MakePayment from "@/components/common/GoPremiumModal/MakePayment/MakePayment.component";
import SubscriptionPlans from "@/components/common/GoPremiumModal/SubscriptionPlans/SubscriptionPlans.component";
import CloseCircleIcon from "@/public/icons/close-circle.svg";
import GoPremiumIllu from "@/public/images/go-premium-illu.svg";

import * as styles from "./GoPremiumModal.styles";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const GoPremiumModal: FC<Props> = ({ isOpen, onClose }) => {
    const [selectedPlan, setSelectedPlan] = useState(0);

    const onSelectPlan = (id: number) => {
        setSelectedPlan(id);
    };

    return (
        <ClientOnlyModal>
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
                        ) : (
                            <MakePayment
                                isOpen={isOpen}
                                selectedPlanId={selectedPlan}
                                onGoBack={() => setSelectedPlan(0)}
                            />
                        )}
                    </SimpleBar>
                </div>
            </div>
        </ClientOnlyModal>
    );
};
export default GoPremiumModal;
