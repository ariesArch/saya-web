import { ActionType, CoursesState } from "@/interfaces/redux.interfaces";
import {
    COURSE_UPDATE,
    COURSES_CHANGE,
    ENROLLED_COURSES_CHANGE,
    SELECTED_COURSE_UPDATE,
} from "@/store/courses/courses.action-types";

const initialState: CoursesState = {
    popularCourses: [],
    enrolledCourses: [],
    selectedCourse: {},
};

const coursesReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case COURSES_CHANGE:
            return { ...state, popularCourses: action.payload };
        case ENROLLED_COURSES_CHANGE:
            return { ...state, enrolledCourses: action.payload };
        case COURSE_UPDATE:
            return {
                ...state,
                popularCourses: state.popularCourses.map((course) =>
                    course.id === action.payload.id ? { ...course, ...action.payload } : course
                ),
            };
        case SELECTED_COURSE_UPDATE:
            return { ...state, selectedCourse: { ...state.selectedCourse, ...action.payload } };
        default:
            return state;
    }
};

export default coursesReducer;
