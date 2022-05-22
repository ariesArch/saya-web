import Image from "next/image";
import { CSSProperties, FC, HTMLProps } from "react";

import MyanmarFlag from "@/public/icons/myanmar-flag.png";

import * as styles from "./PhoneNumberInput.styles";

interface Props extends HTMLProps<HTMLInputElement> {
    containerStyles?: CSSProperties;
}

const PhoneNumberInput: FC<Props> = ({ containerStyles, ...rest }) => {
    return (
        <div css={styles.inputContainer} style={containerStyles}>
            <div css={styles.iconContainer}>
                <Image src={MyanmarFlag} alt="Myanmar Flag" />
                <span>+95</span>
            </div>
            <input css={styles.input} type="number" placeholder="Start with 09" {...rest} />
        </div>
    );
};

export default PhoneNumberInput;
