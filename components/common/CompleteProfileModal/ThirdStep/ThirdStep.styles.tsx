import { css } from "@emotion/react";

export const radioContainer = css`
    display: flex;
    flex-direction: column;
`;

export const radioInput = (isChecked = false) => css`
    display: flex;
    align-items: flex-start;
    padding: 0.7rem 1rem;
    border-radius: 0.5rem;
    background-color: #f9f9f9;
    margin: 0.5rem 1rem 0.5rem 0;
    cursor: pointer;
    transition: all 0.2s;

    input[type="radio"] {
        transition: all 0.2s;
    }

    ${isChecked
        ? `
        background-color: var(--color-primary);
        color: #fff;
    `
        : `
          input[type="radio"] {
            opacity: 0;
        }
    `};
`;

export const textContainer = css`
    display: flex;
    flex-direction: column;
    margin-left: 0.5rem;
`;

export const title = css`
    font-size: 1.6rem;
    font-weight: 600;
`;
