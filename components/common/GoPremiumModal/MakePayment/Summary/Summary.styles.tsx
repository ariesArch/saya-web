import { css } from "@emotion/react";

export const summary = css`
    display: flex;
    flex-direction: column;
    margin: 2rem 0 2rem;
`;

export const summaryText = css`
    font-size: 1.8rem;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        font-size: 1.3rem;
        margin: 0 0.5rem;
        color: var(--color-blue);
    }

    span:not(:last-child) {
        margin-right: 6rem;
    }

    &:not(:last-child) {
        margin-bottom: 0.8rem;
    }

    &:last-child {
        font-size: 2rem;
        font-weight: 600;
    }
`;
export const cuponButton = (loading: boolean) => css`
    ${loading &&
    `
    color: #555555 !important;
    cursor: not-allowed !important;
    pointer-events: auto !important;
    `}
`;
