import { css } from "@emotion/react";

export const plansContainer = css`
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;
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
`;

export const cardsContainer = css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 2rem;
    column-gap: 2rem;
    margin-top: 5rem;
`;
