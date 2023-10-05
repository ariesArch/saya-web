export type NotificationType = "general_announcement" | "new_course" | "custom_message_to_specific_users";
export type NotificationCategory = "Tip" | "Marketing Message";

export interface NotificationItem {
    id: string;
    notification_type: NotificationType;
    title: string;
    short_description: string;
    message: string;
    is_read: 0 | 1;
    created_at: string;
    notification_category: NotificationCategory;
}

export interface NotificationsAds {
    id: number;
    image_url: string;
    normal_image_url: string;
    wide_image_url: string;
    thumb_url: string;
    screen_type: string;
    description: string;
    link: string;
    order: string;
}
