import { WeekDayItem, WeeklyProgressItem } from "@/interfaces/calendar.interfaces";
import {
    Category,
    Course,
    CourseItem,
    QuizQuestion,
    QuizSolutionItem,
    QuizSummary,
} from "@/interfaces/courses.interfaces";
import { LiveEvent } from "@/interfaces/live-class.interfaces";
import { NotificationItem, NotificationsAds } from "@/interfaces/notifications.interfaces";
import {
    PaymentIcon,
    PaymentProvider,
    PromotionCampaign,
    SubscriptionPlan,
} from "@/interfaces/payment.interfaces";
import { SurveyData, UserData } from "@/interfaces/user.interfaces";

import { CountryCodeData } from "./country-code.interfaces";

export interface InitialPageProps {
    pageProps: any;
    token: string | null | undefined;
}

export interface ReduxState {
    userState: UserState;
    coursesState: CoursesState;
    liveClassState: LiveClassState;
    paymentState: PaymentState;
    notificationsState: NotificationsState;
    calendarState: CalendarState;
    levelTestState: LevelTestState;
    countryCodeState: CountryCodeState;
}

export type DispatchType = (action: ActionType) => ActionType;

export interface ActionType {
    type: string;
    payload?: any;
}

export interface UserState {
    userData: UserData | Record<string, never>; // Record<string, never> means Empty Object
    surveyData: SurveyData | Record<string, never>;
}

export interface PaymentState {
    subscriptionPlans: SubscriptionPlan[];
    providers: PaymentProvider[];
    isPaymentModalOpen: boolean;
    isPaymentSuccessModalOpen: boolean;
    promotionCampaign: PromotionCampaign | Record<string, never>;
    paymentIcons: PaymentIcon[];
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

export interface NotificationsState {
    notifications: NotificationItem[];
    ads: NotificationsAds[];
}

export interface CalendarState {
    schedule: WeekDayItem[];
    weeklyProgress: WeeklyProgressItem[];
    repeatWeeklySchedule: boolean;
}

export interface LevelTestState {
    questions: QuizQuestion[];
    upcomingQuestions: QuizQuestion[];
}

export interface CountryCodeState {
    countryCodes: CountryCodeData[];
}

export type StudentLevel = "A1" | "A2" | "B1" | "B2" | "C1";
