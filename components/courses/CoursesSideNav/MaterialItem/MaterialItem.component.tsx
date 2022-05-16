import { useRouter } from "next/router";
import { FC, Fragment, HTMLAttributes, ReactNode } from "react";
import { useMediaQuery } from "react-responsive";

import Avatar from "@/components/common/Avatar/Avatar.component";
import { Lesson, LessonStatus } from "@/interfaces/courses.interfaces";
import CheckCircleIcon from "@/public/icons/check-circle.svg";
import LockCircleIcon from "@/public/icons/lock-circle.svg";
// import StarIcon from "@/public/icons/star.svg";
import TickCircleIcon from "@/public/icons/tick-circle.svg";
import VideoCircleOutlinedIcon from "@/public/icons/video-circle-outlined.svg";

import * as styles from "./MaterialItem.styles";

interface Props extends HTMLAttributes<HTMLDivElement> {
    material: Lesson;
    currentLessonId: string;
    isCourseEnrolled: boolean;
    onGoPremiumModalOpen: () => void;
}

const MaterialItem: FC<Props> = (props) => {
    const { material, currentLessonId, isCourseEnrolled, onGoPremiumModalOpen, ...rest } = props;
    const { id, title, cover_photo, mark_as_done, is_lock } = material;
    const router = useRouter();
    const isTablet = useMediaQuery({ maxWidth: 992 });

    const status = (): LessonStatus => {
        let status: LessonStatus = "incomplete";

        if (id === currentLessonId) {
            status = "playing";
            return status;
        }

        if (is_lock) {
            status = "locked";
            return status;
        }

        if (mark_as_done) {
            status = "done";

            if (id === currentLessonId) {
                status = "playing";
            }

            return status;
        }

        return status;
    };

    const renderStatus = (): ReactNode => {
        switch (status()) {
            case "playing":
                return (
                    <Fragment>
                        <VideoCircleOutlinedIcon />{" "}
                        {router.pathname.includes("/practice") ? "Practicing" : "Playing"}
                    </Fragment>
                );
            case "done":
                return (
                    <Fragment>
                        <TickCircleIcon /> Done
                    </Fragment>
                );
            case "locked":
                return (
                    <Fragment>
                        <LockCircleIcon />{" "}
                        <a
                            onClick={(e) => {
                                e.stopPropagation();
                                onGoPremiumModalOpen();
                            }}>
                            Go Premium
                        </a>
                        {/* &nbsp;|&nbsp; */}
                        {/* <a css={styles.playOnceBtn} onClick={(e) => e.stopPropagation()}> */}
                        {/*    Play once by <StarIcon /> <span>10</span> */}
                        {/* </a> */}
                    </Fragment>
                );
            default:
                return (
                    <Fragment>
                        <CheckCircleIcon color="#d2d2d2" /> Incomplete
                    </Fragment>
                );
        }
    };

    return (
        <div css={styles.material(status(), isCourseEnrolled)} {...rest}>
            <Avatar src={cover_photo} hasBorder={false} size={isTablet ? "7rem" : undefined} />

            <div css={styles.contents}>
                <span css={styles.title}>{title}</span>
                <span css={styles.status(status())}>{renderStatus()}</span>
            </div>
        </div>
    );
};

export default MaterialItem;
