import Link from "next/link";
import { useSelector } from "react-redux";

import { mapStudentLevelToLevel } from "@/components/common/sharedData";
import Avatar from "@/components/level-test/Avatar/Avatar.component";
import { ReduxState, StudentLevel } from "@/interfaces/redux.interfaces";

import * as styles from "./Summary.styles";

interface Props {
    level: StudentLevel;
}

const LevelTestSummary = ({ level }: Props) => {
    const { photo } = useSelector((state: ReduxState) => state.userState.userData);

    return (
        <div css={styles.container}>
            <Avatar src={photo} size="19rem" badge={mapStudentLevelToLevel[level]} />
            <span css={styles.congrats}>Congratulations!</span>
            <p css={styles.text}>
                You&apos;ve got a verified badge for {mapStudentLevelToLevel[level]} level!
            </p>

            <Link as="/home/explore" href="/home/explore">
                <span css={styles.link}>Exit</span>
            </Link>
        </div>
    );
};

export default LevelTestSummary;
