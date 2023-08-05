import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SideNav from "@/components/common/SideNav/SideNav.component";
import CoursesSideNav from "@/components/courses/CoursesSideNav/CoursesSideNav.component";
import { ReduxState } from "@/interfaces/redux.interfaces";
import DefaultLayout from "@/layouts/DefaultLayout";
import { onSetSelectedCourse, onSingleCourseFetchAsync } from "@/store/courses/courses.actions";

interface CourseLayoutProps {
    title?: string;
    sidePanel?: ReactNode;
    children: ReactNode;
}

const HomeLayout = (props: CourseLayoutProps) => {
    const { title = "SAYA - The English Learning Platform", sidePanel, children } = props;
    const router = useRouter();
    const { courseId } = router.query;
    const selectedCourse = useSelector((state: ReduxState) => state.coursesState.selectedCourse);
    const dispatch = useDispatch();

    const onSingleCourseFetchFailure = (e: any) => {
        if (e?.response?.status === 404) router.push("/home/classroom");
    };

    useEffect(() => {
        if (!courseId) return () => router.events.off("routeChangeComplete", routeChangeHandler);

        if (selectedCourse?.id !== courseId) {
            dispatch(onSingleCourseFetchAsync(courseId as string, undefined, onSingleCourseFetchFailure));
        }

        const routeChangeHandler = (nextRoute: string) => {
            if (!nextRoute.includes("/courses")) {
                dispatch(onSetSelectedCourse({}));
            }
        };

        router.events.on("routeChangeComplete", routeChangeHandler);

        return () => router.events.off("routeChangeComplete", routeChangeHandler);
    }, []);

    return (
        <DefaultLayout title={title}>
            <div css={body}>
                <div css={contents}>
                    <SideNav />
                    <div css={mainContents}>{children}</div>
                </div>
                <div css={sidePanelStyles}>{sidePanel || <CoursesSideNav />}</div>
            </div>
        </DefaultLayout>
    );
};

const body = css`
    box-sizing: inherit;
    width: 100%;
    flex-grow: 1;
    display: flex;
    padding-right: 2rem;
    background-color: #fbfbfb;

    @media only screen and (max-width: 992px) {
        flex-direction: column;
    }

    @media only screen and (max-width: 695px) {
        padding-right: 0;
        padding-bottom: 8rem;
    }
`;

const contents = css`
    padding: 0 0 4rem 5rem;
    flex-grow: 1;

    @media only screen and (max-width: 695px) {
        padding: 0;
    }
`;

const mainContents = css`
    display: flex;
    flex-direction: column;
    padding: 2rem 0 2rem 6rem;

    @media only screen and (max-width: 1245px) {
        padding: 2rem 0 2rem 5rem;
    }

    @media only screen and (max-width: 695px) {
        padding: 0;
    }
`;

const sidePanelStyles = css`
    padding: 2rem 0 2rem 2rem;
    position: sticky;
    top: 0;
    right: 0;
    z-index: 100;
    height: 100vh;
    width: 35rem;
    flex-shrink: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 1245px) {
        width: 32rem;
    }

    @media only screen and (max-width: 992px) {
        width: 100%;
        padding: 2rem 0 2rem 10rem;
    }

    @media only screen and (max-width: 695px) {
        padding: 4rem 2rem 2rem;
    }
`;

export default HomeLayout;
