import { ReactNode } from "react";

import AdvancedLevel from "@/public/icons/level-advanced.svg";
import BeginnerLevel from "@/public/icons/level-beginner.svg";
import IntermediateLevel from "@/public/icons/level-intermediate.svg";
import PreintermediateLevel from "@/public/icons/level-preintermediate.svg";

export type Levels = "beginner" | "intermediate" | "preintermediate" | "advanced";

export const levelIcons: Record<Levels, ReactNode> = {
    beginner: <BeginnerLevel />,
    preintermediate: <PreintermediateLevel />,
    intermediate: <IntermediateLevel />,
    advanced: <AdvancedLevel />,
};
