import { motion } from "framer-motion";
import { FC } from "react";

import * as styles from "./Switch.styles";

interface Props {
    checked: boolean;
    onChange: () => void;
}

const Switch: FC<Props> = ({ checked, onChange }) => {
    return (
        <div css={styles.switchWrapper(checked)} onClick={() => onChange()}>
            <motion.div css={styles.switchHandle} layout transition={spring} />
        </div>
    );
};

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
};

export default Switch;
