import { CSSProperties, FC, HTMLAttributes, ReactNode, useEffect, useRef } from "react";

import * as styles from "./PopupButton.styles";

interface PopupButtonProps extends HTMLAttributes<HTMLDivElement> {
    popupContent: ReactNode | ReactNode[];
    style?: CSSProperties;
    containerStyle?: CSSProperties;
    popupContentStyles?: CSSProperties;
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
        popupContentStyles,
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
            <div css={styles.button} {...rest} ref={buttonRef}>
                {children}
            </div>

            <div
                css={styles.contents(open, position, horizontalOffset, verticalOffset)}
                ref={popupRef}
                style={popupContentStyles}>
                {popupContent}
            </div>
        </div>
    );
};

export default PopupButton;
