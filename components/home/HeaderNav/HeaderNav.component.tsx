import { motion, Variants } from "framer-motion";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";

import { transition } from "@/components/common/FramerMotion";

import * as styles from "./HeaderNav.styles";

interface Props {
    heading?: ReactNode;
}

const HeaderNav: FC<Props> = ({ heading }) => {
    const router = useRouter();

    const onItemSelect = (route: string) => {
        router.push(route);
    };

    return (
        <div css={styles.headerNav}>
            {!heading ? (
                items.map(({ id, name, route }) => (
                    <motion.div
                        key={id}
                        css={styles.navItem(false)}
                        onClick={() => onItemSelect(route)}
                        animate={router.pathname === route ? "active" : "inactive"}
                        variants={navItemVariants}>
                        <h5>{name}</h5>
                        {router.pathname === route && (
                            <motion.div
                                css={styles.underline}
                                layoutId="headerNavUnderline"
                                initial={false}
                                transition={transition}
                            />
                        )}
                    </motion.div>
                ))
            ) : (
                <div css={styles.navItem(!!heading)}>{heading}</div>
            )}
        </div>
    );
};

const items = [
    {
        id: "classroom",
        name: "Classroom",
        route: "/home/classroom",
    },
    {
        id: "explore",
        name: "Explore",
        route: "/home/explore",
    },
];

const navItemVariants: Variants = {
    inactive: {
        color: "#444",
    },
    active: {
        color: "var(--color-primary)",
    },
};

export default HeaderNav;
