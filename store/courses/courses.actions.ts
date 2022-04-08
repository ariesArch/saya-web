import cookie from "js-cookie";

import { Course, CourseItem } from "@/interfaces/courses.interfaces";
import { DispatchType } from "@/interfaces/redux.interfaces";
import {
    COURSE_UPDATE,
    COURSES_CHANGE,
    ENROLLED_COURSES_CHANGE,
    SELECTED_COURSE_UPDATE,
} from "@/store/courses/courses.action-types";
import { createAxiosInstance, endpoints } from "@/utils/api";
import { emptyFunction } from "@/utils/index";

export const onCoursesChange = (courses: CourseItem[]) => ({
    type: COURSES_CHANGE,
    payload: courses,
});

export const onEnrolledCoursesChange = (courses: CourseItem[]) => ({
    type: ENROLLED_COURSES_CHANGE,
    payload: courses,
});

export const onCourseUpdate = (course: Partial<CourseItem>) => ({
    type: COURSE_UPDATE,
    payload: course,
});

export const onSelectedCourseUpdate = (course: Partial<Course>) => ({
    type: SELECTED_COURSE_UPDATE,
    payload: course,
});

export const onCoursesFetchAsync = (onSuccess = emptyFunction, onFailure = emptyFunction) => {
    return async (dispatch: DispatchType) => {
        const token = cookie.get("token");
        try {
            const instance = createAxiosInstance(token);
            const { data } = await instance.get(endpoints.course.getPopularCourses);

            dispatch(onCoursesChange(data?.data as CourseItem[]));

            onSuccess();
        } catch (e) {
            console.log(e);

            onFailure();
        }
    };
};

export const onEnrolledCoursesFetchAsync = (onSuccess = emptyFunction, onFailure = emptyFunction) => {
    return async (dispatch: DispatchType) => {
        const token = cookie.get("token");
        try {
            const instance = createAxiosInstance(token);
            const { data } = await instance.get(endpoints.user.getEnrolledCourses);

            dispatch(onEnrolledCoursesChange(data?.data as CourseItem[]));
            onSuccess();
        } catch (e) {
            console.log(e);
            onFailure();
        }
    };
};

export const onSingleCourseFetchAsync = (
    id: string,
    onSuccess = emptyFunction,
    onFailure = emptyFunction
) => {
    return async (dispatch: DispatchType) => {
        const token = cookie.get("token");

        dispatch(onSelectedCourseUpdate({}));

        try {
            const instance = createAxiosInstance(token);
            const { data } = await instance.post(endpoints.course.getCourseDetails, { course_id: id });

            dispatch(onSelectedCourseUpdate(data as Course));
            onSuccess();
        } catch (e) {
            console.log(e);
            onFailure();
        }
    };
};

export const onCourseEnrollAsync = (
    courseId: string,
    onSuccess = emptyFunction,
    onFailure = emptyFunction
) => {
    return async (dispatch: DispatchType) => {
        const token = cookie.get("token");

        try {
            const instance = createAxiosInstance(token);
            await instance.post(endpoints.course.enrollACourse, { course_id: courseId });

            dispatch(onSelectedCourseUpdate({ is_enrolled: true }));

            onSuccess();
        } catch (e) {
            console.log(e);
            onFailure();
        }
    };
};
