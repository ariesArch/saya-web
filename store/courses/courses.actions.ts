import axios from "axios";
import cookie from "js-cookie";
import { EmptyObject } from "redux";
import { ThunkDispatch } from "redux-thunk";

import {
    Category,
    Course,
    CourseItem,
    OTPResponse,
    QuizPayloadData,
    QuizQuestion,
    QuizSolutionItem,
    QuizSummary,
} from "@/interfaces/courses.interfaces";
import { DispatchType, ReduxState } from "@/interfaces/redux.interfaces";
import {
    COURSE_UPDATE,
    COURSES_CHANGE,
    ENROLLED_COURSES_CHANGE,
    SELECTED_COURSE_UPDATE,
    SET_CATEGORIES,
    SET_QUIZ,
    SET_QUIZ_SOLUTION,
    SET_QUIZ_SUMMARY,
    SET_SELECTED_COURSE,
} from "@/store/courses/courses.action-types";
import { createAxiosInstance, endpoints } from "@/utils/api";
import { calculateQuizSummary } from "@/utils/courses";
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

export const onSetSelectedCourse = (course: Course | EmptyObject) => ({
    type: SET_SELECTED_COURSE,
    payload: course,
});

export const onSelectedCourseUpdate = (course: Partial<Course>) => ({
    type: SELECTED_COURSE_UPDATE,
    payload: course,
});

export const onSetCategories = (categories: Category[]) => ({
    type: SET_CATEGORIES,
    payload: categories,
});

export const onSetQuiz = (quiz: QuizQuestion[]) => ({
    type: SET_QUIZ,
    payload: quiz,
});

export const onSetQuizSolution = (quizSolution: QuizSolutionItem[]) => ({
    type: SET_QUIZ_SOLUTION,
    payload: quizSolution,
});

export const onSetQuizSummary = (quizSummary: QuizSummary) => ({
    type: SET_QUIZ_SUMMARY,
    payload: quizSummary,
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

export const onCoursesFilterAsync = (
    filters: { level: string; category: string[] } = { level: "all", category: ["business-english"] },
    onSuccess = emptyFunction,
    onFailure = emptyFunction
) => {
    return async (dispatch: DispatchType) => {
        const token = cookie.get("token");
        try {
            const instance = createAxiosInstance(token);
            const { data } = await instance.post(endpoints.course.getPopularCoursesWithFilter, filters);

            dispatch(onCoursesChange(data?.data as CourseItem[]));

            onSuccess();
        } catch (e) {
            console.log(e);

            onFailure();
        }
    };
};

export const onEnrolledCoursesFetchAsync = (
    onSuccess: (hasEnrolledCourses: boolean) => void = emptyFunction,
    onFailure = emptyFunction
) => {
    return async (dispatch: DispatchType) => {
        const token = cookie.get("token");
        try {
            const instance = createAxiosInstance(token);
            const { data } = await instance.get(endpoints.user.getEnrolledCourses);

            dispatch(onEnrolledCoursesChange(data?.data as CourseItem[]));
            onSuccess(!!data?.data?.length);
        } catch (e) {
            console.log(e);
            onFailure();
        }
    };
};

export const onSingleCourseFetchAsync = (
    id: string,
    onSuccess = emptyFunction,
    onFailure: (e: any) => void = emptyFunction,
    resetState = true
) => {
    return async (dispatch: DispatchType, getState: () => ReduxState) => {
        const token = cookie.get("token");
        const { coursesState } = getState();

        if (coursesState.selectedCourse?.id && resetState) {
            dispatch(onSetSelectedCourse({}));
        }

        try {
            const instance = createAxiosInstance(token);
            const { data } = await instance.post(endpoints.course.getCourseDetails, { course_id: id });

            dispatch(onSetSelectedCourse(data as Course));
            onSuccess();
        } catch (e) {
            console.log(e);
            onFailure(e);
        }
    };
};

export const onCourseEnrollAsync = (
    courseId: string,
    onSuccess = emptyFunction,
    onFailure = emptyFunction
) => {
    return async (dispatch: ThunkDispatch<any, any, any>) => {
        const token = cookie.get("token");

        try {
            const instance = createAxiosInstance(token);
            await instance.post(endpoints.course.enrollACourse, { course_id: courseId });

            dispatch(onSingleCourseFetchAsync(courseId));

            onSuccess();
        } catch (e) {
            console.log(e);
            onFailure();
        }
    };
};

export const fetchVideoOtp = (
    videoId: string,
    onSuccess: (data: OTPResponse) => void = emptyFunction,
    onFailure = emptyFunction
) => {
    return async () => {
        try {
            const { data } = await axios.get(`/api/vdocipher/otp?videoId=${videoId}`);

            onSuccess(data as OTPResponse);
        } catch (e) {
            console.log(e);
            onFailure();
        }
    };
};

interface SubmitVideoViewingBehaviorArgs {
    vdocipher_id: string;
    started_seeing_at: 0;
    total_covered_seconds: 0;
    total_played_seconds: 0;
    last_reached_second: 0;
    ended_seeing_at: 0;
    total_covered_array: 0;
}

export const submitVideoViewingBehavior = (data: SubmitVideoViewingBehaviorArgs, courseId: string) => {
    return async (dispatch: ThunkDispatch<any, any, any>) => {
        const token = cookie.get("token");

        try {
            const instance = createAxiosInstance(token);
            await instance.post(endpoints.survey.setVideoViewingBehavior, data);

            dispatch(onSingleCourseFetchAsync(courseId, undefined, undefined, false));
        } catch (e) {
            console.log(e);
        }
    };
};

export const fetchCategoriesAsync = () => {
    return async (dispatch: DispatchType) => {
        const token = cookie.get("token");

        try {
            const instance = createAxiosInstance(token);
            const { data } = await instance.get(endpoints.category.getAllCategories);

            dispatch(onSetCategories(data?.data as Category[]));
        } catch (e) {
            console.log(e);
        }
    };
};

export const onSubmitStudentQuestion = (
    form: { question: string; lesson_id: string },
    onSuccess = emptyFunction,
    onFailure = emptyFunction
) => {
    return async () => {
        const token = cookie.get("token");

        try {
            const instance = createAxiosInstance(token);
            await instance.post(endpoints.student.storeStudentQuestions, form);

            onSuccess();
        } catch (e) {
            console.log(e);
            onFailure();
        }
    };
};

export const fetchLessonQuizAsync = (lessonId: string) => {
    return async (dispatch: DispatchType) => {
        const token = cookie.get("token");
        dispatch(onSetQuiz([]));

        try {
            const instance = createAxiosInstance(token);
            const { data } = await instance.post(endpoints.question.getAllQuestions, { lesson_id: lessonId });

            dispatch(onSetQuiz(data?.data as QuizQuestion[]));
        } catch (e) {
            console.log(e);
        }
    };
};

export const onSubmitQuizPracticingBehavior = (
    form: QuizPayloadData,
    onSuccess = emptyFunction,
    onFailure = emptyFunction
) => {
    return async (dispatch: DispatchType) => {
        const token = cookie.get("token");
        const newFormData = {
            ...form,
            practices: form.practices.map((item) => {
                const newItem = { ...item };
                delete newItem?.isAnswer;
                return item;
            }),
        };

        try {
            const instance = createAxiosInstance(token);
            await instance.post(endpoints.question.submitQuizPracticingBehavior, newFormData);

            dispatch(onSetQuizSummary(calculateQuizSummary(form)));
            onSuccess();
        } catch (e) {
            console.log(e);
            onFailure();
        }
    };
};

export const fetchSummaryAsync = (lessonId: string, onSuccess = emptyFunction, onFailure = emptyFunction) => {
    return async (dispatch: DispatchType) => {
        const token = cookie.get("token");

        try {
            const instance = createAxiosInstance(token);
            const { data } = await instance.post(endpoints.lesson.getLessonWithSolutions, {
                lesson_id: lessonId,
            });

            dispatch(onSetQuizSolution(data?.data as QuizSolutionItem[]));
            onSuccess();
        } catch (e) {
            console.log(e);
            onFailure();
        }
    };
};
