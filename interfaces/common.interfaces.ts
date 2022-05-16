export type ButtonColor =
    | "primary"
    | "default"
    | "success"
    | "rank"
    | "course"
    | "pink-red"
    | "pink"
    | "orchid"
    | "indigo"
    | "light-green";

export type ButtonVariant = "default" | "contained" | "outlined";

export type RadioColor = "primary" | "course";

export type LandingSectionType = "overview" | "liveClass" | "features" | "course" | "contact" | "faq";

export interface Teacher {
    name: string;
    biography: string;
    photo: string;
}

export type ClassLevel = "Beginner" | "Intermediate" | "Advanced";
