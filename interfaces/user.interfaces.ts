import { StudentLevel } from "@/interfaces/redux.interfaces";

export interface UserData {
    name: string;
    photo: string;
    email: string;
    phone: string;
    gender: "male" | "female";
    is_verified: boolean;
    enrolled_courses_count: number;
    has_pushy_token: boolean;
    is_premium: boolean;
    is_new_user: boolean;
    show_dialog: boolean;
    end_date: string;
    start_date: string;
    last_order_number: string;
    show_dialog_survey: boolean;
    promotion: {
        has_promotion: boolean;
        title: string;
    };
    student_level: null | "-" | StudentLevel;
}

export interface SurveyData {
    ageGroups: {
        id: string;
        title: string;
    }[];
    positions: {
        id: string;
        title: string;
        content: string;
    }[];
    practicingFor: {
        id: string;
        title: string;
    }[];
    levels: {
        id: string;
        name: string;
        icon: string;
    }[];
}
