import { ClassLevel, Teacher } from "@/interfaces/common.interfaces";

export interface Chapter {
    id: string;
    title: string;
    is_reached: string;
    lessons: Lesson[];
}

export interface Lesson {
    id: string;
    title: string;
    vdocipher_id: string;
    total_length: number;
    last_reached_second: number;
    cover_photo: string;
    has_practice: boolean;
    is_practice_done: boolean;
    mark_as_done: boolean;
    is_lock: boolean;
    is_enrolled: boolean;
}

export interface CourseItem {
    id: string;
    title: string;
    cover_type: string;
    cover: string;
    total_length_in_seconds: string;
    level: ClassLevel;
    level_icon: string;
    category: string;
    is_enrolled: boolean;
    course_total_finished_length: number;
    teacher: Teacher;
}

export interface Course {
    id: string;
    title: string;
    description: string;
    cover: string;
    cover_type: string;
    cover_video_total_length: number;
    cover_video_finished_length: number;
    course_total_length: number;
    course_total_finished_length: number;
    category_color: string;
    illustration_color: CourseThemeColors;
    illustration_type: "tree" | "mountain";
    level: ClassLevel;
    level_icon: string;
    category: 0;
    is_enrolled: boolean;
    teacher: Teacher;
    chapters: Chapter[];
    current_viewing: Lesson;
    similar_courses: CourseItem[];
}

export type LessonStatus = "playing" | "locked" | "done" | "incomplete";

export interface Category {
    id: string;
    name: string;
    color: string;
    photo: string;
}

export interface OTPResponse {
    otp: string;
    playbackInfo: string;
}

export type QuizQuestionType =
    | "true-false"
    | "multiple-choice"
    | "fill-in-the-blank"
    | "rearrange"
    | "matching";

export type QuizQuestionFormat = "text" | "audio" | "image";

export interface QuizQuestion {
    id: string;
    question_type: QuizQuestionType;
    format: QuizQuestionFormat;
    updated_at: number;
    question: string;
    lesson_id: string;
    answers: QuizQuestionAnswer[];
    arrange_question_data: string[];
    audio: string;
    picture: string;
    answer_by: string;
}

export interface QuizQuestionAnswer {
    id: string;
    format: string;
    updated_at: number;
    answer: string | string[];
    is_answer: boolean;
    explanation: string;
    arrange_data?: [string] | [];
    audio?: string;
    inputAnswer?: string;
}

export interface QuizSolutionItem {
    id: string;
    question_type: QuizQuestionType;
    format: QuizQuestionFormat;
    updated_at: number;
    question: string;
    lesson_id: string;
    answers: QuizSolutionAnswer[];
    arrange_question_data: string[];
    audio: string;
    picture: string;
}

export interface QuizSolutionAnswer extends QuizQuestionAnswer {
    is_user_choice: boolean;
}

export interface QuizPayloadData {
    overall_started_practice_at: string;
    overall_ended_practice_at: string;
    lesson_id: string;
    practices: {
        question_id: string;
        clicked_answer_option_id: string;
        started_practice_at: string;
        ended_practice_at: string;
        // need to filter this out on the payload
        isAnswer?: boolean;
    }[];
}

export interface QuizSummary {
    correctAnswers: number;
    incorrectAnswers: number;
    averageCorrectness: number;
    averageSpeed: number;
}

export type CourseThemeColors = "violet" | "green" | "light-green" | "yellow" | "pink" | "blue";
