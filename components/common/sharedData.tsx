import { ReactNode } from "react";

import { StudentLevel } from "@/interfaces/redux.interfaces";
import AdvancedLevel from "@/public/icons/level-advanced.svg";
import BeginnerLevel from "@/public/icons/level-beginner.svg";
import IntermediateLevel from "@/public/icons/level-intermediate.svg";
import PreintermediateLevel from "@/public/icons/level-preintermediate.svg";

export type Levels =
    | "beginner"
    | "elementary"
    | "intermediate"
    | "preintermediate"
    | "upperintermediate"
    | "advanced";

export const levelIcons: Record<Levels, ReactNode> = {
    beginner: <BeginnerLevel />,
    elementary: <BeginnerLevel />,
    preintermediate: <PreintermediateLevel />,
    intermediate: <IntermediateLevel />,
    upperintermediate: <IntermediateLevel />,
    advanced: <AdvancedLevel />,
};

export const levelData: Record<number, any> = {
    1: {
        name: "Beginner",
        icon: <BeginnerLevel />,
    },
    2: {
        name: "Intermediate",
        icon: <IntermediateLevel />,
    },
    3: {
        name: "Advanced",
        icon: <AdvancedLevel />,
    },
};

export const mapStudentLevelToLevel: Record<StudentLevel, Levels> = {
    A1: "beginner",
    A2: "elementary",
    B1: "intermediate",
    B2: "upperintermediate",
    C1: "advanced",
};
