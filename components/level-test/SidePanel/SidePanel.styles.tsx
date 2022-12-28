import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    padding: 0 0.5rem 0.5rem;
    overflow-x: hidden;
`;

export const card = css`
    display: flex;
    flex-direction: column;
    border-radius: 1.4rem;
    background-color: #fff;
    padding: 1.8rem 2rem;
    box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.1);

    &:not(:last-child) {
        margin-bottom: 1.5rem;
    }
`;

export const header = css`
    ${card};
    background-color: var(--color-light-green);
    color: #fff;
`;

export const heading = css`
    font-size: 1.7rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
`;

export const text = css`
    font-size: 1.5rem;
`;

export const list = css`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
`;

export const listItem = css`
    ${text};
    padding-left: 1.5rem;
    position: relative;

    &:not(:last-child) {
        margin-bottom: 1rem;
    }

    &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0.8rem;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background-color: var(--color-light-green);
    }
`;
