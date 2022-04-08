import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "@/components/common/Button/Button.component";
import { ReduxState } from "@/interfaces/redux.interfaces";
import CourseLayout from "@/layouts/CourseLayout";
import { onCourseEnrollAsync, onSingleCourseFetchAsync } from "@/store/courses/courses.actions";

const CoursePage = () => {
    const router = useRouter();
    const { courseId } = router.query;

    const dispatch = useDispatch();
    const selectedCourse = useSelector((state: ReduxState) => state.coursesState.selectedCourse);

    const [isLoading, setIsLoading] = useState(false);

    const onEnroll = () => {
        setIsLoading(true);
        dispatch(
            onCourseEnrollAsync(
                courseId as string,
                () => setIsLoading(false),
                () => setIsLoading(false)
            )
        );
    };

    useEffect(() => {
        dispatch(onSingleCourseFetchAsync(courseId as string));
    }, [courseId, dispatch]);

    return (
        <CourseLayout>
            <div css={container}>
                <h1>{courseId}</h1>
                <Button
                    variant="contained"
                    color="course"
                    onClick={onEnroll}
                    loading={isLoading}
                    disabled={selectedCourse?.is_enrolled}>
                    {selectedCourse?.is_enrolled ? "Enrolled" : "Free Enroll"}
                </Button>
            </div>
        </CourseLayout>
    );
};

const container = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    height: 80vh;
    width: 100%;
    background-color: #fff;
    border-radius: 1rem;
    padding: 2rem 4rem;

    h1 {
        margin-bottom: 1rem;
    }
`;

export default CoursePage;
