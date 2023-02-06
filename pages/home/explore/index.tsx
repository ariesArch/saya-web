import { css } from "@emotion/react";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CourseFilters from "@/components/home/explore/CourseFilters/CourseFilters.component";
import EnglishLevelTestBanner from "@/components/home/explore/EnglishLevelTestBanner/EnglishLevelTestBanner.component";
import ExploreCourseCard from "@/components/home/explore/ExploreCourseCard/ExploreCourseCard.component";
import { ReduxState } from "@/interfaces/redux.interfaces";
import HomeLayout from "@/layouts/HomeLayout";
import CertificateBadge from "@/public/icons/certificate-badge.svg";
import { fetchCategoriesAsync, onCoursesFetchAsync } from "@/store/courses/courses.actions";

const ExplorePage = () => {
    const dispatch = useDispatch();
    const { popularCourses, studentLevel } = useSelector((state: ReduxState) => ({
        popularCourses: state.coursesState.popularCourses,
        studentLevel: state.userState.userData?.student_level,
    }));

    useEffect(() => {
        dispatch(fetchCategoriesAsync());
        dispatch(onCoursesFetchAsync());
    }, [dispatch]);

    return (
        <HomeLayout>
            <div css={container}>
                <CourseFilters />

                {(!studentLevel || studentLevel === "-") && <EnglishLevelTestBanner />}

                <div css={header}>
                    <CertificateBadge />
                    <h5>Popular courses</h5>
                </div>

                <div css={coursesGrid}>
                    {popularCourses &&
                        popularCourses.map(({ id, title, cover, level, teacher }) => (
                            <ExploreCourseCard
                                key={id}
                                courseId={id}
                                image={cover}
                                courseName={title}
                                level={level}
                                teacher={teacher}
                            />
                        ))}
                </div>
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
    margin: 4rem 0 2rem;

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

export default memo(ExplorePage);
