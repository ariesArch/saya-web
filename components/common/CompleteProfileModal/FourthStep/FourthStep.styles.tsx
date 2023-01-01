import { css } from "@emotion/react";

export const radioContainer = css`
    display: flex;
    flex-direction: column;
`;

export const radioInput = (isChecked = false) => css`
    display: flex;
    align-items: flex-start;
    padding: 1.2rem 1.5rem;
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
        
          svg {
          color: inherit;
        }
    `
        : ``};

    input[type="radio"] {
        opacity: 0;
    }
`;

export const iconContainer = css`
    display: flex;
`;

export const textContainer = css`
    display: flex;
    align-items: center;
    margin-left: 1rem;

    svg {
        margin-right: 0.8rem;
    }
`;

export const title = css`
    font-size: 1.6rem;
    font-weight: 600;
`;

export const separator = css`
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1.6rem;
    position: relative;
    z-index: 2;

    span {
        background-color: #fff;
        padding: 0.5rem 2rem;
        z-index: 2;
    }

    &::before {
        content: "";
        z-index: -1;
        width: 100%;
        height: 0.1rem;
        background-color: #e7e7e7;
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }
`;

export const buttonContainer = css`
    width: 100%;

    button {
        width: 100%;
        border-radius: 0.7rem;
    }
`;

export const link = css`
    font-weight: 500;
    margin-top: 0.5rem;
    text-align: center;
`;
