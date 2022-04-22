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

export interface OTPResponse {
    otp: string;
    playbackInfo: string;
}
