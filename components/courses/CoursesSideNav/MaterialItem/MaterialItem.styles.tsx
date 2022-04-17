import { css } from "@emotion/react";

import { LessonStatus } from "@/interfaces/courses.interfaces";

export const material = (status: LessonStatus, isEnrolled: boolean) => css`
    display: flex;
    padding: 1rem;
    cursor: pointer;
    transition: all 0.2s;
    border-bottom: 1px solid #f5f5f5;

    &:hover {
        background-color: #f9f9f9;
    }

    ${status === "playing" &&
    `
        background-color: #f9f9f9;
        color: var(--color-green);
    `};

    ${status === "locked" &&
    `
        cursor: unset;
        opacity: 0.85;
        pointer-events: none;
    `};

    ${!isEnrolled &&
    `
        pointer-events: none;
    `};
`;

export const contents = css`
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
`;

export const title = css`
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
`;

export const status = (status: LessonStatus) => css`
    font-size: 1.4rem;
    display: flex;
    align-items: center;

    ${(status === "done" || status === "playing") && `color: var(--color-green);`};
    ${status === "locked" && `color: var(--color-blue);`};

    svg {
        width: 1.5rem;
        height: auto;
        margin-right: 0.4rem;
    }

    a {
        pointer-events: auto;
    }
`;

export const playOnceBtn = css`
    display: flex;
    align-items: center;
    margin-left: 0.5rem;
    color: #444;

    svg {
        width: 1.5rem;
        height: auto;
        margin-left: 0.5rem;
        color: var(--color-gold);
    }

    span {
        color: var(--color-gold);
    }

    &:hover {
        color: #222;
    }
`;
