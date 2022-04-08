// eslint-disable-next-line import/no-extraneous-dependencies
import "simplebar/dist/simplebar.min.css";

import { motion, Variants } from "framer-motion";
import { useState } from "react";
import SimpleBar from "simplebar-react";

import { transition } from "@/components/common/FramerMotion";
import RankBanner from "@/components/home/RankBanner/RankBanner.component";
import RankItem from "@/components/home/RankItem/RankItem.component";
import ManPortrait from "@/public/images/man-portrait.jpg";

import * as styles from "./RankTable.styles";

const RankTable = () => {
    const [selectedItem, setSelectedItem] = useState("global");

    const onSelectItem = (tag: string) => {
        setSelectedItem(tag);
    };

    return (
        <div css={styles.rankTable}>
            <div css={styles.header}>
                {navItem.map(({ id, name, tag }) => (
                    <motion.a
                        key={id}
                        css={styles.navItem}
                        animate={selectedItem === tag ? "active" : "inactive"}
                        variants={navItemVariants}
                        onClick={() => onSelectItem(tag)}>
                        <span>{name}</span>
                        {selectedItem === tag && (
                            <motion.div
                                css={styles.underline}
                                layoutId="rankNavUnderline"
                                initial={false}
                                transition={transition}
                            />
                        )}
                    </motion.a>
                ))}
            </div>
            <SimpleBar css={styles.body} style={{ overflowX: "hidden" }}>
                <RankBanner />

                {rankItems.map(({ id, ...rest }) => (
                    <div key={id} css={styles.rankItem}>
                        <RankItem {...rest} isSelected={id === 1} />
                    </div>
                ))}
            </SimpleBar>
        </div>
    );
};

const navItem = [
    {
        id: 1,
        name: "Global",
        tag: "global",
    },
    {
        id: 2,
        name: "Group",
        tag: "group",
    },
];

interface RankItem {
    id: number;
    name: string;
    rank: number;
    image: string | StaticImageData;
    score: number;
    status?: "up" | "down";
    badge?: "beginner" | "preintermediate" | "intermediate" | "advanced";
}

const rankItems: RankItem[] = [
    {
        id: 1,
        name: "KHANT ZAW",
        rank: 8,
        image: ManPortrait,
        score: 102,
        status: "up",
        badge: "beginner",
    },
    {
        id: 2,
        name: "KAUNG MINN KHANT",
        rank: 10,
        image: ManPortrait,
        score: 80,
        status: "up",
    },
    {
        id: 3,
        name: "JESSIKA THEIN",
        rank: 11,
        image: ManPortrait,
        score: 77,
        status: "up",
        badge: "beginner",
    },
    {
        id: 4,
        name: "SEINT",
        rank: 12,
        image: ManPortrait,
        score: 62,
        status: "up",
        badge: "beginner",
    },
    {
        id: 5,
        name: "HAY MARN MARINA",
        rank: 13,
        image: ManPortrait,
        score: 40,
        status: "up",
    },
    {
        id: 6,
        name: "ZAR NI WIN",
        rank: 14,
        image: ManPortrait,
        score: 34,
        badge: "beginner",
    },
    {
        id: 7,
        name: "CHRISTINA",
        rank: 15,
        image: ManPortrait,
        score: 32,
    },
    {
        id: 8,
        name: "Austin Linn",
        rank: 9,
        image: ManPortrait,
        score: 91,
        status: "up",
    },
];

const navItemVariants: Variants = {
    inactive: {
        color: "#444",
    },
    active: {
        color: "var(--color-violet-light)",
    },
};

export default RankTable;
