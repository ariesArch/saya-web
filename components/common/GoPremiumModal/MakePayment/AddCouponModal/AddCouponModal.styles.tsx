import { css } from "@emotion/react";

export const iconContainer = css`
    width: 15rem;
    align-self: center;
    margin-bottom: 4rem;

    svg {
        width: 100%;
        height: auto;
    }
`;

export const heading = css`
    font-size: 4rem;
    font-weight: 500;
    margin-bottom: 2rem;
`;

export const inputContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const error = css`
    color: var(--color-primary);
    margin-top: 1rem;
`;

export const input = css`
    background-color: #f5f5f5;
    border-radius: 0.5rem;
    border: 1px solid #eee;
    padding: 1rem 1.5rem;
    text-align: center;
    font-size: 2rem;
    color: #222;
`;

export const button = css`
    margin-top: 2rem;
    padding: 0.6rem 3rem;
`;
