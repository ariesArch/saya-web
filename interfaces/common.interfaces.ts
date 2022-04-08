export type ButtonColor =
    | "primary"
    | "default"
    | "success"
    | "rank"
    | "course"
    | "pink-red"
    | "pink"
    | "orchid"
    | "indigo";

export type ButtonVariant = "default" | "contained" | "outlined";

export type RadioColor = "primary" | "course";

export type LandingSectionType = "overview" | "liveClass" | "features" | "course" | "contact";

export interface Teacher {
    name: string;
    biography: string;
    photo: string;
}

export type ClassLevel = "Beginner" | "Intermediate" | "Advanced";
