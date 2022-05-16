import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { memo } from "react";

import useTopBarStatus from "@/hooks/useTopBarStatus";
import LogoText from "@/public/icons/logo-text.png";

import * as styles from "./TopBar.styles";

const TopBar = () => {
    const { isFloating, isHidden } = useTopBarStatus();
    const router = useRouter();

    const onNavClick = (id: string) => {
        if (!id) {
            router.push("/");
            return;
        }
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ block: "center" });
    };

    return (
        <motion.div css={styles.topBar(isFloating, isHidden)}>
            <div css={styles.logoContainer} onClick={() => onNavClick("")}>
                <Image src={LogoText} alt="SAYA Logo" />
            </div>
            <div css={styles.nav}>
                {navItems.map(({ id, name, href }) => (
                    <div key={id} css={styles.navItem(href === "faq")} onClick={() => onNavClick(href)}>
                        <span>{name}</span>
                        {href === "faq" && <div css={styles.underline} />}
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

const navItems = [
    {
        id: 1,
        name: "Home",
        href: "",
    },
    {
        id: 2,
        name: "FAQs",
        href: "faq",
    },
];

export default memo(TopBar);
