import { css } from "@emotion/react";

export const plansContainer = css`
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;

    @media only screen and (max-width: 495px) {
        align-items: center;
        padding-top: 2rem;
    }
`;

export const header = css`
    display: flex;
    align-items: center;
`;

export const headerIcon = css`
    padding: 0.5rem 0.4rem;
    border-radius: 0.8rem;
    background-color: var(--color-blue);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    color: #fff;

    svg {
        width: 2.5rem;
        height: auto;
    }
`;

export const heading = css`
    font-size: 4.5rem;
    font-weight: 700;

    @media only screen and (max-width: 495px) {
        font-size: 3.5rem;
    }
`;

export const descriptions = css`
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
    padding-left: 0.5rem;
`;

export const descriptionItem = css`
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    font-weight: 600;

    svg {
        width: 2.5rem;
        height: auto;
        margin-right: 1rem;
        color: var(--color-blue);
    }

    &:not(:last-child) {
        margin-bottom: 1rem;
    }

    @media only screen and (max-width: 495px) {
        font-size: 1.5rem;

        svg {
            width: 2rem;
        }
    }
`;

export const cardsContainer = css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 2rem;
    column-gap: 2rem;
    margin-top: 5rem;

    @media only screen and (max-width: 745px) {
        margin-top: 8rem;
    }

    @media only screen and (max-width: 545px) {
        margin-top: 5rem;
    }

    @media only screen and (max-width: 495px) {
        grid-template-columns: repeat(1, 1fr);
        height: calc(100vh - 25rem);
        padding-top: 5rem;
        margin-top: 2rem;
    }
`;
