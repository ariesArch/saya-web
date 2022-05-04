import { css } from "@emotion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import OtpInput from "react-otp-input";
import ReactTooltip from "react-tooltip";

import Avatar from "@/components/common/Avatar/Avatar.component";
import Button from "@/components/common/Button/Button.component";
import PopupButton from "@/components/common/PopupButton/PopupButton.component";
import RadioButton from "@/components/common/RadioButton/RadioButton.component";
import useIsMounted from "@/hooks/useIsMounted";
import DefaultLayout from "@/layouts/DefaultLayout";
import NextJSLogo from "@/public/icons/logo-text.png";
import ManPortrait from "@/public/images/man-portrait.png";

export default function Testing() {
    const isMounted = useIsMounted();
    const [selected, setSelected] = useState("");
    const popupRef = useRef(null);
    const [listening, setListening] = useState(false);
    const [isOpen, setIsOpen] = useState(true);
    const [otp, setOtp] = useState("");
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const onOTPChange = (otp: string) => {
        setOtp(otp);
    };

    const onSelect = (value: string) => {
        setSelected(value);
    };

    const showNotification = () => {
        // eslint-disable-next-line no-new
        new Notification("Hello World!", {
            body: "This is a notification!",
        });
    };

    const onPopupToggle = () => setIsPopupOpen(!isPopupOpen);
    const onPopupClose = () => setIsPopupOpen(false);

    const listenForOutsideClicks = (
        listening: boolean,
        setListening: (listening: boolean) => void,
        menuRef: any,
        setIsOpen: (isOpen: boolean) => void
    ) => {
        return () => {
            if (listening) return;
            if (!menuRef?.current) return;
            setListening(true);
            [`click`, `touchstart`].forEach(() => {
                document.addEventListener(`click`, (evt) => {
                    if (menuRef.current.contains(evt.target)) return;
                    setIsOpen(false);
                });
            });
        };
    };

    useEffect(() => {
        if ("Notification" in window) {
            Notification.requestPermission();
        }
    }, []);

    useEffect(() => listenForOutsideClicks(listening, setListening, popupRef, setIsOpen));

    return (
        <DefaultLayout>
            <div css={container}>
                <div css={logoContainer}>
                    <Image src={NextJSLogo} />
                </div>

                <div css={buttonsContainer}>
                    <Button color="primary" onClick={showNotification}>
                        Click to show notification
                    </Button>

                    <Button>Default Classic</Button>

                    <Button color="primary" variant="contained">
                        Primary
                    </Button>
                    <Button color="default" variant="contained">
                        Default
                    </Button>
                    <Button color="success" variant="contained">
                        Success
                    </Button>
                    <Button color="rank" variant="contained">
                        Rank
                    </Button>
                    <Button color="course" variant="contained">
                        Course
                    </Button>
                </div>

                <div css={radioGroup}>
                    {radioItems.map((item) => (
                        <div css={radio} key={item.value}>
                            <RadioButton
                                {...item}
                                onChange={() => onSelect(item.value)}
                                checked={selected === item.value}
                            />
                        </div>
                    ))}
                </div>
                <PopupButton
                    popupContent={<div style={{ minHeight: "10rem" }}>hello</div>}
                    open={isPopupOpen}
                    position="right"
                    onClose={onPopupClose}
                    onClick={onPopupToggle}>
                    <Avatar src={ManPortrait} badge="advanced" size="5rem" />
                </PopupButton>
                <div css={toolTipPlaceHolder} data-for="main" data-tip="react tool tip">
                    Hover me!
                </div>
                {isMounted && <ReactTooltip id="main" type="dark" effect="solid" place="bottom" />}

                <div css={popupContainer} ref={popupRef} onClick={() => setIsOpen(true)}>
                    popup container is {isOpen ? "open" : "closed"}
                </div>
                <OtpInput
                    inputStyle={{ width: "3rem", height: "3rem" }}
                    value={otp}
                    isInputNum
                    onChange={onOTPChange}
                    numInputs={4}
                    separator={<span>&nbsp;</span>}
                />
            </div>
        </DefaultLayout>
    );
}

const radioItems = [
    {
        label: "Radio Button",
        value: "radio-button",
    },
    {
        label: "Radio Button 2",
        value: "radio-button-2",
    },
];

const container = css`
    flex-grow: 1;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const logoContainer = css`
    width: 30rem;
    svg {
        width: 100%;
        height: auto;
    }
`;

const buttonsContainer = css`
    display: flex;
    margin-top: 5rem;

    button:not(:last-child) {
        margin-right: 1rem;
    }
`;

export const radioGroup = css`
    display: flex;
    margin-top: 5rem;
`;

export const radio = css`
    &:not(:last-child) {
        margin-right: 1rem;
    }
`;

export const toolTipPlaceHolder = css`
    margin-top: 5rem;
    padding: 1rem 2rem;
    background-color: #f5f5f5;
`;

export const popupContainer = css`
    padding: 10rem 20rem;
    border: 1px solid var(--color-primary);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const otpInput = css``;
