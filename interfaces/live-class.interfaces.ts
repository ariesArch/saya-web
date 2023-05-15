import { Teacher } from "@/interfaces/common.interfaces";

export interface LiveEvent {
    id: number;
    uuid: string;
    zoom_meeting_id: string;
    zoom_meeting_link: string;
    zoom_meeting_password: string;
    image_url: string;
    thumb_url: string;
    date_time_from: string;
    date_time_to: string;
    date: string;
    old_date: string | null;
    from: string;
    old_from: string | null;
    to: string;
    title: string;
    description: string;
    teacher_name: string;
    teacher: Teacher;
    level: number;
    category: string;
    is_live: boolean;
    is_notify: boolean;
    created_at?: string;
    deleted_at: null | string;
}

export interface ParsedLiveEventsWeek {
    id: number;
    isCurrentWeek: boolean;
    isNextWeek: boolean;
    days: { id: string; name: string; isToday: boolean; date: string; items: LiveEvent[] }[];
}

export type ParsedLiveEventData = ParsedLiveEventsWeek[];
