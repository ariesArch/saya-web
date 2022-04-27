import { ReactNode, useState } from "react";
import { useSelector } from "react-redux";

import Button from "@/components/common/Button/Button.component";
import PopupButton from "@/components/common/PopupButton/PopupButton.component";
import { levelIcons } from "@/components/common/sharedData";
import { ButtonColor } from "@/interfaces/common.interfaces";
import { ReduxState } from "@/interfaces/redux.interfaces";
import ArrowDownCircle from "@/public/icons/arrow-down-circle.svg";

import * as styles from "./CourseFilters.styles";

const CourseFilters = () => {
    const categories = useSelector((state: ReduxState) => state.coursesState.categories);
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
                {categories &&
                    categories.map(({ id, name }, i) => (
                        <Button
                            key={id}
                            variant={!filters.includes(id) ? "contained" : "outlined"}
                            color={btnColors[i]}
                            onClick={() => onFilterItemClick(id)}>
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

const btnColors: ButtonColor[] = ["pink-red", "pink", "orchid", "indigo", "course", "rank", "default"];

export default CourseFilters;
