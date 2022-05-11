import {
    Category,
    Course,
    CourseItem,
    QuizQuestion,
    QuizSolutionItem,
    QuizSummary,
} from "@/interfaces/courses.interfaces";
import { LiveEvent } from "@/interfaces/live-class.interfaces";
import { PaymentProvider, SubscriptionPlan } from "@/interfaces/payment.interfaces";
import { UserData } from "@/interfaces/user.interfaces";

export interface InitialPageProps {
    pageProps: any;
    token: string | null | undefined;
}

export interface ReduxState {
    userState: UserState;
    coursesState: CoursesState;
    liveClassState: LiveClassState;
    paymentState: PaymentState;
}

export type DispatchType = (action: ActionType) => ActionType;

export interface ActionType {
    type: string;
    payload?: any;
}

export interface UserState {
    userData: UserData | Record<string, never>; // Record<string, never> means Empty Object
}

export interface PaymentState {
    subscriptionPlans: SubscriptionPlan[];
    providers: PaymentProvider[];
    isPaymentModalOpen: boolean;
}

export interface CoursesState {
    popularCourses: CourseItem[];
    enrolledCourses: CourseItem[];
    selectedCourse: Course | Record<string, never>;
    categories: Category[];
    quiz: QuizQuestion[];
    quizSolution: QuizSolutionItem[];
    quizSummary: QuizSummary | Record<string, never>;
}

export interface LiveClassState {
    events: LiveEvent[];
}
