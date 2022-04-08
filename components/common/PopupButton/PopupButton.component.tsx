import { ButtonHTMLAttributes, CSSProperties, FC, ReactNode, useEffect, useRef } from "react";

import * as styles from "./PopupButton.styles";

interface PopupButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    popupContent: ReactNode | ReactNode[];
    style?: CSSProperties;
    containerStyle?: CSSProperties;
    className?: string;
    children: ReactNode | ReactNode[];
    open: boolean;
    onClose: () => any;
    onClick: () => any;
    position?: "top" | "bottom" | "left" | "right";
    horizontalOffset?: number;
    verticalOffset?: number;
}

const PopupButton: FC<PopupButtonProps> = (props) => {
    const {
        popupContent,
        containerStyle,
        className,
        children,
        open,
        onClose,
        position = "bottom",
        horizontalOffset = 0,
        verticalOffset = 0,
        ...rest
    } = props;
    const popupRef = useRef(null);
    const buttonRef = useRef(null);

    const handleClickAway = (e: MouseEvent) => {
        if ((popupRef as any).current.contains(e.target)) return;

        if (buttonRef.current && (buttonRef as any).current.contains(e.target)) return;

        onClose();
    };

    useEffect(() => {
        document.addEventListener("click", handleClickAway);

        return () => document.removeEventListener("click", handleClickAway);
    });

    return (
        <div css={styles.popupContainer} className={className} style={{ ...containerStyle }}>
            <button {...rest} ref={buttonRef}>
                {children}
            </button>

            <div css={styles.contents(open, position, horizontalOffset, verticalOffset)} ref={popupRef}>
                {popupContent}
            </div>
        </div>
    );
};

export default PopupButton;
