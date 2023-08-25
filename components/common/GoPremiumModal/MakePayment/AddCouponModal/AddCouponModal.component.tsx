import "react-toastify/dist/ReactToastify.min.css";

import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

import Button from "@/components/common/Button/Button.component";
import Modal from "@/components/common/Modal/Modal.component";
import { CheckPromoResponse } from "@/interfaces/payment.interfaces";
import GiftIcon from "@/public/icons/gift.svg";
import { onCheckPromoCodeAsync } from "@/store/payment/payment.actions";

import * as styles from "./AddCouponModal.styles";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    planId: number;
    onAddPromoCode: (data: CheckPromoResponse) => void;
    provider_name: string;
}

const AddCouponModal: FC<Props> = ({ isOpen, onClose, planId, onAddPromoCode, provider_name }) => {
    const dispatch = useDispatch();
    const [promoCode, setPromoCode] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const onPromoCodeChange = (e: ChangeEvent<HTMLInputElement>) => setPromoCode(e.target.value);

    const onCheckPromoCodeSuccess = (data: CheckPromoResponse) => {
        setIsLoading(false);
        if (error) setError("");

        onAddPromoCode(data);
        onClose();
    };

    const onCheckPromoCodeFailure = (e: any) => {
        setIsLoading(false);
        // setError("Incorrect coupon code");
        if (e?.response?.status === 422) {
            setError(e?.response?.data?.error);
        } else {
            setError("Something went wrong. Please try again.");
        }
    };

    const onEnter = (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        dispatch(
            onCheckPromoCodeAsync(
                { promo_code: promoCode, subscription_plan_id: planId, provider_name },
                onCheckPromoCodeSuccess,
                onCheckPromoCodeFailure
            )
        );
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div css={styles.iconContainer}>
                <GiftIcon />
            </div>

            <h5 css={styles.heading}>Discount Coupon Code</h5>

            <form css={styles.inputContainer} onSubmit={onEnter}>
                <input
                    css={styles.input}
                    type="text"
                    placeholder="Enter coupon code"
                    value={promoCode}
                    onChange={onPromoCodeChange}
                />
                {!!error && <span css={styles.error}>{error}</span>}

                <Button css={styles.button} variant="contained" type="submit" loading={isLoading}>
                    Enter
                </Button>
            </form>
        </Modal>
    );
};

export default AddCouponModal;
