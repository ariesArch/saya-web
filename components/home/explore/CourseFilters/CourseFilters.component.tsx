import { ReactNode, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "@/components/common/Button/Button.component";
import PopupButton from "@/components/common/PopupButton/PopupButton.component";
import { levelIcons } from "@/components/common/sharedData";
import { ButtonColor } from "@/interfaces/common.interfaces";
import { ReduxState } from "@/interfaces/redux.interfaces";
import ArrowDownCircle from "@/public/icons/arrow-down-circle.svg";
import { onCoursesFilterAsync } from "@/store/courses/courses.actions";

import * as styles from "./CourseFilters.styles";

const CourseFilters = () => {
    const categories = useSelector((state: ReduxState) => state.coursesState.categories);
    const dispatch = useDispatch();
    const [filters, setFilters] = useState<string[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [levelItem, setLevelItem] = useState<LevelItem>(levelItems[0]);

    const onPopupToggle = () => setIsOpen(!isOpen);
    const onPopupClose = () => setIsOpen(false);

    const onSelectItem = (level: LevelItem) => {
        setLevelItem(level);

        dispatch(onCoursesFilterAsync({ level: level.value, category: filters }));
        onPopupClose();
    };

    const onFilterItemClick = (id: string) => {
        const newFilters = filters.includes(id) ? filters.filter((item) => item !== id) : [...filters, id];

        setFilters(newFilters);
        dispatch(onCoursesFilterAsync({ level: levelItem.value, category: newFilters }));
    };

    useEffect(() => {
        if (!categories.length) return;
        setFilters(categories.map(({ id }) => id));
    }, [categories]);

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
                {!!categories.length &&
                    categories.map(({ id, name }, i) => (
                        <Button
                            key={id}
                            variant={filters.includes(id) ? "contained" : "outlined"}
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
    { id: 4, name: "All Levels", value: "all", icon: "" },
    { id: 1, name: "Beginner", value: "beginner", icon: levelIcons.beginner },
    { id: 2, name: "Intermediate", value: "intermediate", icon: levelIcons.intermediate },
    { id: 3, name: "Advanced", value: "advanced", icon: levelIcons.advanced },
];

const btnColors: ButtonColor[] = ["pink-red", "pink", "orchid", "indigo", "course", "rank", "default"];

export default CourseFilters;
