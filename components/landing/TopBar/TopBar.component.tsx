import { motion } from "framer-motion";
import Image from "next/image";
import { FC, memo, useEffect, useState } from "react";

import { transition } from "@/components/common/FramerMotion";
import NavBtn from "@/components/landing/TopBar/NavBtn/NavBtn.component";
import useTopBarStatus from "@/hooks/useTopBarStatus";
import { LandingSectionType } from "@/interfaces/common.interfaces";
import LogoText from "@/public/icons/logo-text.png";

import * as styles from "./TopBar.styles";

interface Props {
    visibleSection: LandingSectionType;
}

const TopBar: FC<Props> = ({ visibleSection }) => {
    const [selectedItem, setSelectedItem] = useState("overview");
    const { isFloating, isHidden } = useTopBarStatus();

    const onNavClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ block: "center" });

        setSelectedItem(id);
    };

    useEffect(() => {
        if (visibleSection !== selectedItem) setSelectedItem(visibleSection);
    }, [selectedItem, visibleSection]);

    return (
        <motion.div css={styles.topBar(isFloating, isHidden)}>
            <div css={styles.logoContainer}>
                <Image src={LogoText} alt="SAYA Logo" />
            </div>
            <ul css={styles.nav}>
                {navItems.map(({ id, name, href }) => (
                    <li key={id} css={styles.navItem(selectedItem === href)}>
                        <a onClick={() => onNavClick(href)}>{name}</a>
                        {selectedItem === href && (
                            <motion.div
                                css={styles.underline}
                                layoutId="underline"
                                initial={false}
                                transition={transition}
                            />
                        )}
                    </li>
                ))}
            </ul>

            <NavBtn />
        </motion.div>
    );
};

const navItems = [
    {
        id: 1,
        name: "Overview",
        href: "overview",
    },
    {
        id: 2,
        name: "Live class",
        href: "liveClass",
    },
    {
        id: 3,
        name: "Features",
        href: "features",
    },
    {
        id: 4,
        name: "Course",
        href: "course",
    },
    {
        id: 5,
        name: "Contact",
        href: "contact",
    },
];

export default memo(TopBar);
