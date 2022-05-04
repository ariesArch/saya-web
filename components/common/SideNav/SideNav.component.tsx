import { motion, Variants } from "framer-motion";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";

import UserPopupButton from "@/components/home/UserPopupButton/UserPopupButton.component";
import HomeIcon from "@/public/icons/home.svg";
import NotificationIcon from "@/public/icons/notification-outlined.svg";
import RadarIcon from "@/public/icons/radar.svg";

import * as styles from "./SideNav.styles";

const SideNav = () => {
    const router = useRouter();
    const isMobile = useMediaQuery({ maxWidth: 695 });

    const onItemClick = (route: string) => {
        router.push(route);
    };

    return (
        <div css={styles.sideNav}>
            {navItems.map(({ id, name, icon, routes }) => (
                <div key={id} css={styles.navItem}>
                    <motion.button
                        css={styles.navButton}
                        title={name}
                        onClick={() => onItemClick(routes[0])}
                        initial="inactive"
                        animate={routes.includes(router.pathname) ? "active" : "inactive"}
                        variants={iconVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}>
                        {icon}
                    </motion.button>
                    <span>{name}</span>
                </div>
            ))}
            <div css={styles.avatarContainer}>
                <UserPopupButton
                    position={isMobile ? "top" : "right"}
                    verticalOffset={isMobile ? 10 : -70}
                    horizontalOffset={isMobile ? -240 : 0}
                />
                <span>Profile</span>
            </div>
        </div>
    );
};

const navItems = [
    {
        id: 1,
        name: "Home",
        icon: <HomeIcon />,
        routes: ["/home/classroom", "/home/explore"],
    },
    {
        id: 2,
        name: "Live",
        icon: <RadarIcon />,
        routes: ["/home/live-class"],
    },
    {
        id: 3,
        name: "Notifications",
        icon: <NotificationIcon />,
        routes: ["/user/notifications"],
    },
];

const iconVariants: Variants = {
    inactive: {
        color: "#444",
        backgroundColor: "#f9f9f9",
    },
    active: {
        color: "#fff",
        backgroundColor: "var(--color-primary)",
    },
};

export default SideNav;
