import { useRouter } from "next/router";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";

import Avatar from "@/components/common/Avatar/Avatar.component";
import Button from "@/components/common/Button/Button.component";
import PopupButton from "@/components/common/PopupButton/PopupButton.component";
import ProgressBar from "@/components/common/ProgressBar/ProgressBar.component";
import ChevronRight from "@/public/icons/chevron-right.svg";
import CrownIcon from "@/public/icons/crown.svg";
import EditIcon from "@/public/icons/edit.svg";
import ExitIcon from "@/public/icons/exit.svg";
import IntermediateBadge from "@/public/icons/profile-badge-preintermediate-text.svg";
import QuestionIcon from "@/public/icons/question-mark-circle.svg";
import ReloadIcon from "@/public/icons/reload.svg";
import StartIcon from "@/public/icons/star-outlined.svg";
import GraduateIcon from "@/public/icons/teacher.svg";
import TickSquareIcon from "@/public/icons/tick-square.svg";
import ManPortrait from "@/public/images/man-portrait.jpg";
import { userLogoutAsync } from "@/store/user/user.actions";

import * as styles from "./UserPopupButton.styles";

interface PopupContentsProps {
    onPopupClose: () => void;
}

const PopupContents: FC<PopupContentsProps> = ({ onPopupClose }) => {
    const router = useRouter();
    const dispatch = useDispatch();

    const onLogoutSuccess = () => {
        router.push("/");
        onPopupClose();
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
                    <Avatar src={ManPortrait} size="5.5rem" badge="advanced" />
                    <div css={styles.userInfoTexts}>
                        <span css={styles.username}>Khant Zaw</span>
                        <span css={styles.phone}>09 451 778 548</span>
                    </div>
                </div>

                <div css={styles.subInfo}>
                    <div css={styles.subInfoTexts}>
                        <span>
                            <strong>16 days</strong> premium left
                        </span>
                        <span>Expire at Apr 19, 2022</span>
                    </div>
                    <Button css={styles.renewBtn} variant="contained">
                        <ReloadIcon />
                        Renew
                    </Button>
                </div>

                <div css={styles.progressBar}>
                    <ProgressBar progress={55} color="blue" style={{ height: ".4rem" }} />
                </div>

                <Button css={styles.premiumBtn} variant="contained">
                    <CrownIcon css={styles.crownIcon} />
                    Go Premium
                    <ChevronRight css={styles.rightArrow} />
                </Button>
            </div>

            <div css={styles.row}>
                <GraduateIcon />

                <div css={styles.col}>
                    <strong>Certified</strong>
                    <span>Exp: Jun 22, 2024</span>
                </div>

                <div css={styles.badge}>
                    <IntermediateBadge />
                </div>
            </div>

            <div css={styles.row}>
                <StartIcon />
                <span>
                    <strong>2500</strong> Collected
                </span>
            </div>
            {menuItems.map(({ id, name, icon, route }) => (
                <a key={id} css={styles.menuItem} onClick={() => onClickMenuItem(route)}>
                    {icon}
                    <span>{name}</span>
                </a>
            ))}
        </div>
    );
};

const UserPopupButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onPopupToggle = () => setIsOpen(!isOpen);
    const onPopupClose = () => setIsOpen(false);

    return (
        <PopupButton
            popupContent={<PopupContents onPopupClose={onPopupClose} />}
            position="right"
            verticalOffset={-110}
            open={isOpen}
            onClose={onPopupClose}
            onClick={onPopupToggle}>
            <Avatar src={ManPortrait} badge="advanced" size="5rem" />
        </PopupButton>
    );
};

const menuItems = [
    {
        id: 1,
        name: "Edit Profile",
        route: "/user/edit-profile",
        icon: <EditIcon />,
    },
    {
        id: 2,
        name: "Finished Courses",
        route: "/home/classroom",
        icon: <TickSquareIcon />,
    },
    {
        id: 3,
        name: "Logout",
        route: "",
        icon: <ExitIcon />,
    },
    {
        id: 4,
        name: "Help",
        route: "/help",
        icon: <QuestionIcon />,
    },
];

export default UserPopupButton;
