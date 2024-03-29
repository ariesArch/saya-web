import { differenceInDays, format, parseISO } from "date-fns";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import { FC, Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Avatar from "@/components/common/Avatar/Avatar.component";
import Button from "@/components/common/Button/Button.component";
import PopupButton from "@/components/common/PopupButton/PopupButton.component";
import ProgressBar from "@/components/common/ProgressBar/ProgressBar.component";
import { mapStudentLevelToLevel } from "@/components/common/sharedData";
import { ReduxState, StudentLevel } from "@/interfaces/redux.interfaces";
import { UserData } from "@/interfaces/user.interfaces";
import CalendarIcon from "@/public/icons/calendar-outlined.svg";
import ChevronRight from "@/public/icons/chevron-right.svg";
import CrownIcon from "@/public/icons/crown.svg";
import EditIcon from "@/public/icons/edit.svg";
import ExitIcon from "@/public/icons/exit.svg";
import PhoneIcon from "@/public/icons/phone.svg";
// import IntermediateBadge from "@/public/icons/profile-badge-preintermediate-text.svg";
import QuestionIcon from "@/public/icons/question-mark-circle.svg";
import ReloadIcon from "@/public/icons/reload.svg";
// import StartIcon from "@/public/icons/star-outlined.svg";
// import GraduateIcon from "@/public/icons/teacher.svg";
// import TickSquareIcon from "@/public/icons/tick-square.svg";
import { onPaymentModalToggle } from "@/store/payment/payment.actions";
import { userLogoutAsync } from "@/store/user/user.actions";

import * as styles from "./UserPopupButton.styles";

interface Props {
    position?: "top" | "bottom" | "left" | "right";
    horizontalOffset?: number;
    verticalOffset?: number;
}

const UserPopupButton: FC<Props> = ({ position = "right", verticalOffset = -70, horizontalOffset = 0 }) => {
    const userData = useSelector((state: ReduxState) => state.userState.userData);
    const [isOpen, setIsOpen] = useState(false);

    const onPopupToggle = () => setIsOpen(!isOpen);
    const onPopupClose = () => setIsOpen(false);

    const hasStudentLevel = userData?.student_level !== "-" && !!userData?.student_level;

    return (
        <PopupButton
            popupContent={<PopupContents userData={userData} onPopupClose={onPopupClose} />}
            position={position}
            horizontalOffset={horizontalOffset}
            verticalOffset={verticalOffset}
            open={isOpen}
            onClose={onPopupClose}
            onClick={onPopupToggle}>
            <button>
                <Avatar
                    src={userData?.photo}
                    size="5rem"
                    hasBorder={hasStudentLevel}
                    badge={
                        hasStudentLevel
                            ? mapStudentLevelToLevel[userData?.student_level as StudentLevel]
                            : undefined
                    }
                />
            </button>
        </PopupButton>
    );
};

interface PopupContentsProps {
    userData: UserData | Record<string, never>;
    onPopupClose: () => void;
}

const PopupContents: FC<PopupContentsProps> = ({ userData, onPopupClose }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { name, photo, phone, is_premium, start_date, end_date, student_level } = userData;
    const hasStudentLevel = student_level !== "-" && !!student_level;

    const calculateProgress = (): number => {
        const totalDaysOfSub = differenceInDays(parseISO(end_date), parseISO(start_date));
        const totalDaysLeftBeforeExpire = totalDaysOfSub - differenceInDays(parseISO(start_date), new Date());

        return 100 - (totalDaysLeftBeforeExpire / totalDaysOfSub) * 100;
    };

    const onLogoutSuccess = () => {
        const onepay_only_view = cookie.get("onepay_only_view");
        if (onepay_only_view) {
            router.push("/?showonepayonly=true");
        } else {
            router.push("/");
        }
        onPopupClose();
    };

    const onGoPremiumBtnClick = () => dispatch(onPaymentModalToggle(true));

    const onTakeLevelTest = () => {
        router.push("/level-test", "/level-test");
    };

    const onClickMenuItem = (route: string) => {
        // if no routes specified, just then it's logout
        if (!route) {
            dispatch(userLogoutAsync(onLogoutSuccess));
            return;
        }

        router.push(route).then(() => onPopupClose());
    };

    return (
        <div css={styles.popupContents}>
            <div css={styles.header}>
                <div css={styles.userInfo}>
                    <Avatar
                        src={photo}
                        size="5.5rem"
                        hasBorder={hasStudentLevel}
                        badge={hasStudentLevel ? mapStudentLevelToLevel[student_level] : undefined}
                    />
                    <div css={styles.userInfoTexts}>
                        <span css={styles.username}>{name}</span>
                        <span css={styles.phone}>{phone}</span>
                    </div>
                </div>

                {is_premium && (
                    <Fragment>
                        <div css={styles.subInfo}>
                            <div css={styles.subInfoTexts}>
                                <span>
                                    <strong>{differenceInDays(parseISO(end_date), new Date())} days</strong>{" "}
                                    premium left
                                </span>
                                <span>
                                    Expire at {end_date && format(parseISO(end_date), "MMM dd, yyyy")}
                                </span>
                            </div>
                            <Button css={styles.renewBtn} variant="contained" onClick={onGoPremiumBtnClick}>
                                <ReloadIcon />
                                Renew
                            </Button>
                        </div>

                        <div css={styles.progressBar}>
                            <ProgressBar
                                progress={calculateProgress()}
                                color="blue"
                                style={{ height: ".4rem" }}
                            />
                        </div>
                    </Fragment>
                )}

                {!is_premium && (
                    <Button css={styles.premiumBtn} variant="contained" onClick={onGoPremiumBtnClick}>
                        <CrownIcon css={styles.crownIcon} />
                        Go Premium
                        <ChevronRight css={styles.rightArrow} />
                    </Button>
                )}
            </div>

            {/* <div css={styles.row}> */}
            {/*    <GraduateIcon /> */}

            {/*    <div css={styles.col}> */}
            {/*        <strong>Certified</strong> */}
            {/*        <span>Exp: Jun 22, 2024</span> */}
            {/*    </div> */}

            {/*    <div css={styles.badge}> */}
            {/*        <IntermediateBadge /> */}
            {/*    </div> */}
            {/* </div> */}

            {/* <div css={styles.row}> */}
            {/*    <StartIcon /> */}
            {/*    <span> */}
            {/*        <strong>2500</strong> Collected */}
            {/*    </span> */}
            {/* </div> */}
            <div css={styles.buttonContainer}>
                <Button variant="contained" color="light-green" onClick={onTakeLevelTest}>
                    Take your level test now!
                </Button>
            </div>

            {menuItems.map(({ id, name, icon, route }) => (
                <div key={id} css={styles.menuItem} onClick={() => onClickMenuItem(route)}>
                    {icon}
                    <span>{name}</span>
                </div>
            ))}
        </div>
    );
};

const menuItems = [
    {
        id: 6,
        name: "Calendar",
        route: "/calendar",
        icon: <CalendarIcon />,
    },
    {
        id: 1,
        name: "Edit Profile",
        route: "/edit-profile",
        icon: <EditIcon />,
    },
    // {
    //     id: 2,
    //     name: "Finished Courses",
    //     route: "/home/classroom",
    //     icon: <TickSquareIcon />,
    // },
    {
        id: 2,
        name: "Change Phone Number",
        route: "/change-phone-number",
        icon: <PhoneIcon />,
    },
    {
        id: 4,
        name: "Logout",
        route: "",
        icon: <ExitIcon />,
    },
    {
        id: 5,
        name: "FAQs",
        route: "/faq",
        icon: <QuestionIcon />,
    },
];

export default UserPopupButton;
