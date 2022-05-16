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

    const onLogoClick = () => window.scrollTo(0, 0);

    useEffect(() => {
        if (visibleSection !== selectedItem) setSelectedItem(visibleSection);
    }, [selectedItem, visibleSection]);

    return (
        <motion.div css={styles.topBar(isFloating, isHidden)}>
            <div css={styles.logoContainer} onClick={onLogoClick}>
                <Image src={LogoText} alt="SAYA Logo" />
            </div>
            <div css={styles.nav}>
                {navItems.map(({ id, name, href }) => (
                    <div
                        key={id}
                        css={styles.navItem(selectedItem === href)}
                        onClick={() => onNavClick(href)}>
                        <span>{name}</span>
                        {selectedItem === href && (
                            <motion.div
                                css={styles.underline}
                                layoutId="underline"
                                initial={false}
                                transition={transition}
                            />
                        )}
                    </div>
                ))}
            </div>

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
        name: "FAQs",
        href: "faq",
    },
    {
        id: 6,
        name: "Contact",
        href: "contact",
    },
];

export default memo(TopBar);
