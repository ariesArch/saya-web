import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
`;

export const input = css`
    border: none;
    background-color: #f6f6f6;
    padding: 1.2rem 1.2rem;
    border-radius: 1rem;
    font-size: 1.5rem;
    outline: none;
`;

export const text = css`
    margin-top: 0.5rem;
    margin-left: 1rem;

    span {
        text-decoration: underline;
    }
`;

export const radioContainer = css`
    display: flex;
    flex-wrap: wrap;
`;

export const radioInput = (isChecked = false) => css`
    padding: 0.7rem 1rem;
    border-radius: 0.5rem;
    background-color: #f9f9f9;
    margin: 0.5rem 1rem 0.5rem 0;
    transition: all 0.2s;

    font-size: 1.6rem;
    font-weight: 600;

    ${isChecked
        ? `
        background-color: var(--color-primary);
        color: #fff;
    `
        : `
          input[type="radio"] {
            position: absolute;
            opacity: 0;
            width: 0;
        }
    `};
`;
