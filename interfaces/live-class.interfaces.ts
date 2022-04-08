import { ClassLevel, Teacher } from "@/interfaces/common.interfaces";

export interface LiveEvent {
    id: number;
    uuid: string;
    zoom_meeting_id: string;
    zoom_meeting_link: string;
    zoom_meeting_password: string;
    image_url: string;
    thumb_url: string;
    date: string;
    old_date: string;
    from: string;
    old_from: string;
    to: string;
    title: string;
    description: string;
    teacher_name: string;
    teacher: Teacher;
    level: ClassLevel;
    category: string;
    is_live: true;
    is_notify: true;
    created_at: string;
    deleted_at: null | string;
}
