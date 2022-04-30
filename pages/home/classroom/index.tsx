import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ClassroomCourseCard from "@/components/home/classroom/ClassroomCourseCard/ClassroomCourseCard.component";
import { ReduxState } from "@/interfaces/redux.interfaces";
import HomeLayout from "@/layouts/HomeLayout";
import PlaylistIcon from "@/public/icons/playlist-primary.svg";
import { onEnrolledCoursesFetchAsync } from "@/store/courses/courses.actions";

const ClassroomPage = () => {
    const dispatch = useDispatch();
    const { enrolledCourses } = useSelector((state: ReduxState) => ({
        enrolledCourses: state.coursesState.enrolledCourses,
    }));
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        setIsFetching(true);
        dispatch(
            onEnrolledCoursesFetchAsync(
                () => setIsFetching(false),
                () => setIsFetching(false)
            )
        );
    }, [dispatch]);

    return (
        <HomeLayout>
            <div css={container}>
                <div css={header}>
                    <PlaylistIcon />
                    <h5>Enrolled courses</h5>
                </div>
                <div css={coursesGrid}>
                    {!!enrolledCourses.length &&
                        enrolledCourses.map(
                            ({ id, cover, title, course_total_finished_length, total_length_in_seconds }) => (
                                <ClassroomCourseCard
                                    key={id}
                                    courseId={id}
                                    image={cover}
                                    courseName={title}
                                    progress={Math.floor(
                                        (course_total_finished_length / +total_length_in_seconds) * 100
                                    )}
                                />
                            )
                        )}
                </div>
                {!isFetching && !enrolledCourses.length && (
                    <div css={placeHolder}>No enrolled courses to show.</div>
                )}
            </div>
        </HomeLayout>
    );
};

const container = css`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const header = css`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    h5 {
        font-size: 2rem;
        font-weight: 600;
        margin-left: 1rem;
    }
`;

const coursesGrid = css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2rem;
    row-gap: 3rem;

    @media only screen and (max-width: 1245px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media only screen and (max-width: 695px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 478px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const placeHolder = css`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.2rem;
`;

export default ClassroomPage;
