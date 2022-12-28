// eslint-disable-next-line import/no-extraneous-dependencies
import "simplebar/dist/simplebar.min.css";

import SimpleBar from "simplebar-react";

import * as styles from "./SidePanel.styles";

const LevelTestSidePanel = () => {
    return (
        <SimpleBar css={styles.container}>
            <div css={styles.header}>
                <span css={styles.heading}>English Level Test</span>
                <span css={styles.text}>The Certification Badge will be provided when completed.</span>
            </div>
            <div css={styles.card}>
                <span css={styles.heading}>Rules & Regulations</span>
                <ul css={styles.list}>
                    <li css={styles.listItem}>
                        Level badge will be provided only after completing the test until the end
                    </li>
                    <li css={styles.listItem}>
                        You can retake the test unlimited time. The badge will be assigned according to the
                        last test.
                    </li>
                    <li css={styles.listItem}>
                        Certification isn’t provided after taking the test, this level test is only to help
                        you decide from where you should start learning.
                    </li>
                </ul>
            </div>

            <div css={styles.card}>
                <span css={styles.heading}>CEFR English Levels</span>
                <ul css={styles.list}>
                    <li css={styles.listItem}>A1 - Basic level</li>
                    <li css={styles.listItem}>A2 - Elementary level</li>
                    <li css={styles.listItem}>B1 - Intermediate level</li>
                    <li css={styles.listItem}>B2 - Upper Intermediate level</li>
                    <li css={styles.listItem}>C1 - Advanced level</li>
                </ul>
            </div>
        </SimpleBar>
    );
};

export default LevelTestSidePanel;
