import axios from "axios";

import { apiUrl, appToken } from "@/utils/constants";

export const createAxiosInstance = (token = "") => {
    return axios.create({
        baseURL: apiUrl,
        headers: {
            Authorization: token ? `Bearer ${token}` : false,
            app_token: appToken as string,
        },
    });
};

export const endpoints = {
    question: {
        getAllQuestions: "/questions",
    },
    ads: {
        getAds: "/ads",
        setAdsClickCount: "/ads_click_count",
    },
    auth: {
        login: "/login",
        verifyLogin: "/verifyLogin",
        refreshToken: "/refreshToken",
    },
    user: {
        logout: "/me/logout",
        getProfile: "/me",
        updateProfile: "/me/update",
        surveyBoxToggle: "/set-show-dialog-false",
        getOnGoingCourses: "/ongoingCourses",
        updatePhoneNumber: "/me/updatePhoneNumber",
        verifyUpdatePhoneNumber: "/me/verifyUpdatePhoneNumber",
        getLearningAnalytics: "/learningAnalytics",
        updatePushToken: "/me/updatePushyToken",
        getEnrolledCourses: "/enrolledCourses",

        // notifications
        getNotifications: "/notifications",
        getSingleNotification: "/notification",

        // notify live class
        notifyLiveEvent: "/notify_me",
        unnotifyLiveEvent: "/unnotify_me",
        toggleNotifyMultipleEvents: "/confirm_notify_me",
    },
    liveEvents: {
        getJWTForZoom: "/get_zoom_jwt",
        getZoomCredentials: "/get_zoom_credential",

        getAllLiveEvents: "/get_live_events",
        getOneUpcomingLiveEvent: "/get_coming_live_event",
        checkLiveEventsUpdated: "/check_live_event_updated",
    },
    category: {
        getAllCategories: "/categories",
        getCategoryDetails: "/category",
    },
    course: {
        getPopularCourses: "/popularCourses",
        enrollACourse: "/enrollCourse",
        getCourseDetails: "/course",
    },
    featureList: {
        getFeatureList: "/feature-lists",
    },
    level: {
        getAllLevels: "/levels",
    },
    lesson: {
        getLessonWithSolutions: "/lessons/solution",
    },
    student: {
        storeStudentQuestions: "/store_student_question",
    },
    subscriptionPlans: {
        getSubscriptionPlans: "/payment/subscriptionplans",
    },
    promotion: {
        checkPromoCode: "/promo/check",
        applyRedeemCode: "/redeem-code/add",
    },
    payment: {
        initializePayment: "/payment/initialize",
        getPaymentProviders: "/payment/providers",
    },
    survey: {
        addScreenVisited: "/add_screen_visited_histories",
        setQuizzesPracticingBehavior: "/submitQuizzesPracticingBehaviours",
        setVideoViewingBehavior: "/submitVideoViewingBehaviours",
    },
};
