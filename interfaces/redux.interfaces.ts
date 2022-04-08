import { Course, CourseItem } from "@/interfaces/courses.interfaces";
import { LiveEvent } from "@/interfaces/live-class.interfaces";
import { UserData } from "@/interfaces/user.interfaces";

export interface InitialPageProps {
    pageProps: any;
    token: string | null | undefined;
}

export interface ReduxState {
    userState: UserState;
    coursesState: CoursesState;
    liveClassState: LiveClassState;
}

export type DispatchType = (action: ActionType) => ActionType;

export interface ActionType {
    type: string;
    payload?: any;
}

export interface UserState {
    userData: UserData | Record<string, never>; // Record<string, never> means Empty Object
}

export interface CoursesState {
    popularCourses: CourseItem[];
    enrolledCourses: CourseItem[];
    selectedCourse: Course | Record<string, never>;
}

export interface LiveClassState {
    events: LiveEvent[];
}
