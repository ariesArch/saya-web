import Button from "@/components/common/Button/Button.component";

import * as styles from "./LevelTestStart.styles";

interface Props {
    onStart: () => any;
}

const LevelTestStart = ({ onStart }: Props) => {
    return (
        <div css={styles.container}>
            <h5 css={styles.heading}>Ready for your level test?</h5>
            <Button css={styles.button} onClick={onStart}>
                Start now
            </Button>
        </div>
    );
};

export default LevelTestStart;
