import React, { useEffect, useState } from "react";

import * as styles from "./NavBtn.styles";

const NavBtn = () => {
    const [isOpen, setIsOpen] = useState(false);
    const onNavToggle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        // disabling scroll when popup opens
        if (isOpen) {
            // @ts-ignore
            document.querySelector("html").style.overflow = "hidden";
        } else {
            // @ts-ignore
            document.querySelector("html").style.overflowY = "auto";
        }
    }, [isOpen]);

    const onItemClick = (name: string) => {
        setIsOpen(!isOpen);
        const element = document.getElementById(name.toLowerCase());
        if (element) element.scrollIntoView({ block: "start" });
    };

    return (
        <div css={styles.navigation}>
            <div css={styles.btnWrapper}>
                <div css={styles.navigationBg(isOpen)}>
                    <div css={styles.ratio} />
                </div>
                <div css={styles.bars} onClick={onNavToggle}>
                    <div css={styles.bar(isOpen)} />
                    <div css={styles.bar(isOpen)} />
                    <div css={styles.bar(isOpen)} />
                    <div css={styles.bar(isOpen)} />
                </div>
            </div>
            <div css={styles.navContents(isOpen)}>
                <div css={styles.navItems(isOpen)}>
                    {navItems.map((item) => (
                        <a css={styles.navItem} key={item.id} onClick={() => onItemClick(item.name)}>
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
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

export default NavBtn;
