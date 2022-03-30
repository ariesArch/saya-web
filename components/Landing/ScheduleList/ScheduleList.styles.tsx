import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
`;

export const scheduleList = css`
    display: flex;
    flex-direction: column;
`;

export const scheduleItem = css`
    display: flex;

    &:not(:last-child) {
        margin-bottom: 2rem;
    }
`;

export const scheduleIcon = css`
    margin-right: 1rem;
    svg {
        color: var(--color-primary);
    }
`;

export const scheduleContents = css`
    display: flex;
    flex-grow: 1;
`;

export const dateInfo = css`
    display: flex;
    flex-direction: column;
`;

export const date = css`
    font-size: 1.8rem;

    strong {
        font-size: 2rem;
    }
`;

export const duration = css`
    font-size: 1.8rem;
`;

export const classTitle = css`
    font-size: 2rem;
    font-weight: 600;
    color: var(--font-color-dark);
    flex-grow: 1;
    text-align: center;
`;

export const teacherName = css`
    font-size: 1.8rem;
`;

export const separator = css`
    font-size: 3rem;
    margin-bottom: 2rem;
    padding-left: 4rem;
`;

export const button = css`
    padding: 0.6rem 1rem;
    align-self: flex-start;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 1.8rem;

    svg {
        color: #fff;
        margin-right: 0.5rem;
    }
`;
