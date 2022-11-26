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
                        All of certification levels are applicable for 12months/1year.
                    </li>
                    <li css={styles.listItem}>
                        If you don’t earn a skill badge for a given skill, you can retake the exam once more
                        within six months
                    </li>
                    <li css={styles.listItem}>
                        Retake your test if you didn’t get the result you wanted. Do some revision and then
                        resit the test.
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
