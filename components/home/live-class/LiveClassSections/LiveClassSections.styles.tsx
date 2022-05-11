import { css } from "@emotion/react";

export const container = css`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    padding-left: 5rem;

    @media only screen and (max-width: 1245px) {
        padding-left: 2rem;
    }
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

    @media only screen and (max-width: 545px) {
        padding-left: 3.5rem;
    }

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

    @media only screen and (max-width: 545px) {
        font-size: 2.5rem;
    }
`;

export const subHeading = css`
    @media only screen and (max-width: 545px) {
        font-size: 1.2rem;
    }
`;

export const grid = css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2.5rem;
    row-gap: 2rem;
    width: 100%;

    @media only screen and (max-width: 1245px) {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 1rem;
    }

    @media only screen and (max-width: 1075px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
