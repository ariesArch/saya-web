import { css } from "@emotion/react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";

import Button from "@/components/common/Button/Button.component";
import RadioButton from "@/components/common/RadioButton/RadioButton.component";
import useIsMounted from "@/hooks/useIsMounted";
import DefaultLayout from "@/layouts/DefaultLayout";
import NextJSLogo from "@/public/logo.png";

export default function Testing() {
    const isMounted = useIsMounted();
    const [selected, setSelected] = useState("");

    const onSelect = useCallback((value: string) => {
        setSelected(value);
    }, []);

    const showNotification = useCallback(() => {
        // eslint-disable-next-line no-new
        new Notification("Hello World!", {
            body: "This is a notification!",
        });
    }, []);

    useEffect(() => {
        if ("Notification" in window) {
            Notification.requestPermission();
        }
    }, []);

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
                <div css={toolTipPlaceHolder} data-for="main" data-tip="react tool tip">
                    Hover me!
                </div>
                {isMounted && <ReactTooltip id="main" type="dark" effect="solid" place="bottom" />}
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
