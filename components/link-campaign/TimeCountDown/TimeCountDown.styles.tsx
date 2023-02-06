import { css } from "@emotion/react";

export const container = css`
    display: flex;
`;

export const counter = css`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-right: 1.5rem;
    }
`;

export const counterItemsContainer = css`
    display: flex;
`;

export const counterItem = css`
    padding: 0.6rem 1rem;
    background-color: rgba(60, 118, 235, 0.12);
    color: var(--color-blue);
    font-weight: 500;
    font-size: 2rem;
    border-radius: 0.4rem;

    &:not(:last-child) {
        margin-right: 0.5rem;
    }
`;

export const counterLabel = css`
    color: var(--color-blue);
    font-weight: 500;
    margin-top: 0.3rem;
    margin-left: 1rem;
`;
