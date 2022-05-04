import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
    max-width: 50%;
`;

export const questionContainer = css`
    padding: 2rem 0;
    text-align: center;
`;

export const questionText = css`
    font-size: 2.5rem;
    font-weight: 600;
`;

export const answersContainer = css`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
`;

export const selectItem = (isActive: boolean) => css`
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 1.4rem;
    border: 2px solid transparent;
    cursor: pointer;
    transition: all 0.2s;

    ${isActive && `border-color: #fff;`};

    &:not(:last-child) {
        margin-bottom: 1.5rem;
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.15);
    }

    &:active {
        background-color: rgba(0, 0, 0, 0.12);
    }
`;

export const multipleSelectItemColIcon = (isActive: boolean) => css`
    width: 1.8rem;
    height: 1.8rem;
    margin-right: 1.2rem;
    flex-shrink: 0;
    display: flex;
    color: ${isActive ? "var(--color-green)" : "#fff"};

    svg {
        width: 100%;
        height: auto;
    }
`;

export const label = css`
    font-size: 1.8rem;
`;
