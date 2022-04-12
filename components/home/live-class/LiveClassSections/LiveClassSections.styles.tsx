import { css } from "@emotion/react";

export const container = css`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    padding-left: 5rem;
`;

export const weekSection = css`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        border-bottom: 1px solid #eee;
        padding-bottom: 4rem;
        margin-bottom: 4rem;
    }
`;

export const section = css`
    display: flex;
    position: relative;
    padding-left: 7rem;

    &:not(:last-child) {
        border-left: 2px dashed #8b8b8b;
        padding-bottom: 5rem;
    }
`;

export const header = css`
    display: flex;
    flex-direction: column;
    width: 12rem;
    position: absolute;
    left: -6.5rem;
    background-color: #fbfbfb;
    text-align: center;
    padding: 1rem;
`;

export const weekIndicator = css`
    color: var(--color-primary);
    text-transform: uppercase;
    margin-bottom: 0.5rem;
`;

export const heading = (isToday: boolean) => css`
    font-size: 4rem;
    font-weight: 700;
    line-height: 3rem;

    ${isToday &&
    `
        color: var(--color-primary);
    `};
`;

export const subHeading = css``;

export const grid = css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1.5rem;
    row-gap: 2rem;
`;
