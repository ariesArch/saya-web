import Link from "next/link";
import { useSelector } from "react-redux";

import Avatar from "@/components/common/Avatar/Avatar.component";
import Button from "@/components/common/Button/Button.component";
import { ReduxState } from "@/interfaces/redux.interfaces";
import TakeNextLessonIcon from "@/public/icons/take-next-lesson.svg";

import * as styles from "./EnglishLevelTestBanner.styles";

const EnglishLevelTestBanner = () => {
    const { photo } = useSelector((state: ReduxState) => state.userState.userData);

    return (
        <div css={styles.container}>
            <div css={styles.contents}>
                <Avatar src={photo} size="4.5rem" />
                <div css={styles.textsContainer}>
                    <span css={styles.heading}>Take your level test!</span>
                    <span css={styles.text}>
                        Not sure what to learn? Try our level test to find out which lessons are right for
                        you.
                    </span>
                </div>
            </div>

            <Link as="/level-test" href="/level-test">
                <Button variant="contained" css={styles.button}>
                    Test now{" "}
                    <span css={styles.iconContainer}>
                        <TakeNextLessonIcon />
                    </span>
                </Button>
            </Link>
        </div>
    );
};

export default EnglishLevelTestBanner;
