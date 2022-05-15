import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
`;

export const grid = css`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    column-gap: 1rem;
`;

export const gridCol = css`
    display: flex;
    flex-direction: column;
`;

export const colHeader = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;
`;

export const heading = css`
    font-size: 2rem;
    font-weight: 600;
`;

export const subHeading = css`
    font-size: 1.4rem;
    white-space: nowrap;
`;

export const colBody = css`
    display: flex;
    flex-direction: column;
`;

export const scheduleItem = css`
    display: flex;
    flex-direction: column;
    padding: 0.7rem 1.4rem;
    border-radius: 1.4rem;
    background-color: var(--color-violet-light);
    color: #fff;

    &:not(:last-of-type) {
        margin-bottom: 1rem;
    }
`;

export const textContainer = css`
    display: flex;
    align-items: flex-end;
    white-space: nowrap;
`;

export const text = css`
    font-size: 1.8rem;
    font-weight: 600;
`;

export const label = css`
    font-size: 1.5rem;
    font-weight: 300;
    margin-left: 0.3rem;
    margin-bottom: 0.15rem;
`;

export const addBtn = css`
    color: var(--color-green-light);
    align-self: center;
    width: 3rem;
    height: 3rem;

    svg {
        width: 100%;
        height: 100%;
    }
`;
