import { ReactNode, useState } from "react";

import Button from "@/components/common/Button/Button.component";
import PopupButton from "@/components/common/PopupButton/PopupButton.component";
import { levelIcons } from "@/components/common/sharedData";
import { ButtonColor } from "@/interfaces/common.interfaces";
import ArrowDownCircle from "@/public/icons/arrow-down-circle.svg";

import * as styles from "./CourseFilters.styles";

const CourseFilters = () => {
    const [filters, setFilters] = useState<string[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [levelItem, setLevelItem] = useState<LevelItem>(levelItems[1]);

    const onPopupToggle = () => setIsOpen(!isOpen);
    const onPopupClose = () => setIsOpen(false);

    const onSelectItem = (level: LevelItem) => {
        setLevelItem(level);
        onPopupClose();
    };

    const onFilterItemClick = (value: string) => {
        setFilters(filters.includes(value) ? filters.filter((item) => item !== value) : [...filters, value]);
    };

    return (
        <div css={styles.courseFilters}>
            <PopupButton
                popupContent={
                    <div css={styles.popupContent}>
                        {levelItems.map((item) => (
                            <div
                                key={item.id}
                                css={styles.popupContentItem}
                                onClick={() => onSelectItem(item)}>
                                {item.name}
                            </div>
                        ))}
                    </div>
                }
                open={isOpen}
                onClose={onPopupClose}
                onClick={onPopupToggle}
                position="bottom">
                <div css={styles.dropdownWrapper}>
                    {levelItem.icon}
                    <span>{levelItem.name}</span>
                    <ArrowDownCircle />
                </div>
            </PopupButton>

            <div css={styles.filterItems}>
                {filtersItems.map(({ id, name, value, btnColor }) => (
                    <Button
                        key={id}
                        variant={!filters.includes(value) ? "contained" : "outlined"}
                        color={btnColor as ButtonColor}
                        onClick={() => onFilterItemClick(value)}>
                        {name}
                    </Button>
                ))}
            </div>
        </div>
    );
};

interface LevelItem {
    id: number;
    name: string;
    value: string;
    icon: ReactNode;
}

const levelItems: LevelItem[] = [
    { id: 1, name: "Beginner", value: "beginner", icon: levelIcons.beginner },
    { id: 2, name: "Intermediate", value: "intermediate", icon: levelIcons.intermediate },
    { id: 3, name: "Advanced", value: "advanced", icon: levelIcons.advanced },
];

const filtersItems = [
    {
        id: 1,
        name: "IELTS Training",
        value: "ielts-training",
        btnColor: "pink-red",
    },
    {
        id: 2,
        name: "Business English",
        value: "business-english",
        btnColor: "pink",
    },
    {
        id: 3,
        name: "Travel English",
        value: "travel-english",
        btnColor: "orchid",
    },
    {
        id: 4,
        name: "Grammar",
        value: "grammar",
        btnColor: "indigo",
    },
    {
        id: 5,
        name: "Daily Small Talk",
        value: "daily-small-talk",
        btnColor: "course",
    },
];

export default CourseFilters;
