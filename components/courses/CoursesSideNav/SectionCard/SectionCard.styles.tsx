import { css } from "@emotion/react";

import { LessonStatus } from "@/interfaces/courses.interfaces";

export const sectionCard = css`
    display: flex;
    flex-direction: column;
    border-radius: 1.4rem;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.14);
    padding: 1.2rem 1.5rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background-color: #f9f9f9;
    }

    &:active {
        background-color: #fff;
    }

    &:not(:last-child) {
        margin-bottom: 1rem;
    }
`;

export const chapter = css`
    margin-bottom: 0.2rem;
`;

export const title = css`
    font-size: 1.8rem;
    font-weight: 600;
`;

export const iconsContainer = css`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 1rem;

    svg {
        width: 1.5rem;
        height: auto;

        &:not(:last-child) {
            margin-right: 0.3rem;
        }
    }
`;

export const statusIcon = (status: LessonStatus) => css`
    ${(status === "done" || status === "playing") && `color: var(--color-green);`};
    ${status === "locked" && `color: var(--color-blue);`};

    &:not(:last-child) {
        margin-right: 0.3rem;
    }
`;
