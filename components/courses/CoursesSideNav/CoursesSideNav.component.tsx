// eslint-disable-next-line import/no-extraneous-dependencies
import "simplebar/dist/simplebar.min.css";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SimpleBar from "simplebar-react";

import Button from "@/components/common/Button/Button.component";
import DescriptionCard from "@/components/courses/CoursesSideNav/DescriptionCard/DescriptionCard.component";
import MaterialItem from "@/components/courses/CoursesSideNav/MaterialItem/MaterialItem.component";
import SectionCard from "@/components/courses/CoursesSideNav/SectionCard/SectionCard.component";
import { Chapter } from "@/interfaces/courses.interfaces";
import { ReduxState } from "@/interfaces/redux.interfaces";
import ChevronLeftIcon from "@/public/icons/chevron-left.svg";
import { onPaymentModalToggle } from "@/store/payment/payment.actions";

import * as styles from "./CoursesSideNav.styles";

const CoursesSideNav = () => {
    const router = useRouter();
    const { lessonId } = router.query;
    const { selectedCourse } = useSelector((state: ReduxState) => ({
        selectedCourse: state.coursesState.selectedCourse,
    }));
    const dispatch = useDispatch();

    const [selectedChapter, setSelectedChapter] = useState<{
        chapter: Chapter | Record<string, never>;
        index: number;
    }>({ chapter: {}, index: 0 });

    const onModalOpen = () => dispatch(onPaymentModalToggle(true));

    const onSelectChapter = (chapter: Chapter, index: number) => setSelectedChapter({ chapter, index });
    const onUnselectChapter = () => setSelectedChapter({ chapter: {}, index: 0 });

    const onClickMaterial = (id: string) => {
        router.push(`/courses/${selectedCourse.id}/learn/lesson/${id}`);
    };

    useEffect(() => {
        if (lessonId && selectedCourse?.id) {
            const chapter = selectedCourse.chapters.find((chapter) =>
                chapter.lessons.find((lesson) => lesson.id === lessonId)
            );

            if (chapter) {
                const index = selectedCourse.chapters.indexOf(chapter);
                setSelectedChapter({ chapter, index });
            } else {
                router.push(`/courses/${selectedCourse.id}`);
            }
        }
    }, [lessonId, router, selectedCourse.chapters, selectedCourse.id]);

    return (
        <div css={styles.container}>
            <DescriptionCard />

            <div css={styles.scrollContainer}>
                {!selectedChapter.chapter.id ? (
                    <div css={styles.sections}>
                        {selectedCourse?.chapters?.map((chapter, i) => (
                            <SectionCard
                                key={chapter.id}
                                chapter={chapter}
                                index={i}
                                currentLessonId={lessonId as string}
                                onClick={() => onSelectChapter(chapter, i)}
                            />
                        ))}
                    </div>
                ) : (
                    <SimpleBar css={styles.materials}>
                        <div css={styles.chapterInfo}>
                            <Button css={styles.backBtn} onClick={onUnselectChapter}>
                                <ChevronLeftIcon /> Back
                            </Button>

                            <SectionCard
                                css={styles.materialSectionCard}
                                chapter={selectedChapter.chapter as Chapter}
                                index={selectedChapter.index}
                                currentLessonId={lessonId as string}
                            />
                        </div>

                        {selectedChapter.chapter?.lessons?.map((lesson) => (
                            <MaterialItem
                                key={lesson.id}
                                material={lesson}
                                currentLessonId={lessonId as string}
                                isCourseEnrolled={selectedCourse?.is_enrolled}
                                onClick={() => onClickMaterial(lesson.id)}
                                onGoPremiumModalOpen={onModalOpen}
                            />
                        ))}
                    </SimpleBar>
                )}
            </div>
        </div>
    );
};

export default CoursesSideNav;
