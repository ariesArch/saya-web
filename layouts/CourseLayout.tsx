import { css } from "@emotion/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SideNav from "@/components/common/SideNav/SideNav.component";
import CoursesSideNav from "@/components/courses/CoursesSideNav/CoursesSideNav.component";
import { ReduxState } from "@/interfaces/redux.interfaces";
import { onSingleCourseFetchAsync } from "@/store/courses/courses.actions";

interface DefaultLayoutProps {
    title?: string;
    children: ReactNode;
}

const HomeLayout = (props: DefaultLayoutProps) => {
    const { title = "SAYA - The English Learning Platform", children } = props;
    const router = useRouter();
    const { courseId } = router.query;
    const selectedCourse = useSelector((state: ReduxState) => state.coursesState.selectedCourse);
    const dispatch = useDispatch();

    useEffect(() => {
        if (selectedCourse?.id === courseId) return;
        dispatch(onSingleCourseFetchAsync(courseId as string));
    }, []);

    return (
        <div css={container}>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div css={body}>
                <div css={contents}>
                    <SideNav />
                    <div css={mainContents}>{children}</div>
                </div>
                <div css={sidePanel}>
                    <CoursesSideNav />
                </div>
            </div>
        </div>
    );
};

const container = css`
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #f9f9f9;
`;

const body = css`
    box-sizing: inherit;
    width: 100%;
    flex-grow: 1;
    display: flex;
    padding-right: 2rem;
`;

export const contents = css`
    padding: 0 0 4rem 5rem;
    flex-grow: 1;
`;

export const mainContents = css`
    display: flex;
    flex-direction: column;
    padding: 3rem 0 2rem 8rem;
`;

export const sidePanel = css`
    padding: 2rem;
    position: sticky;
    top: 0;
    right: 0;
    z-index: 100;
    height: 100vh;
    width: 38rem;
    flex-shrink: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`;

export default HomeLayout;
