import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    width: fit-content;
    padding-left: 10rem;
    padding-bottom: 2rem;
`;

export const header = css`
    display: flex;
    align-items: center;
    position: relative;
`;

export const backBtn = css`
    margin-right: 2rem;
    font-size: 1.8rem;
    font-weight: 600;
    display: flex;
    align-items: center;

    position: absolute;
    top: 1.5rem;
    left: -8rem;

    svg {
        width: 0.7rem;
        height: auto;
        margin-right: 1rem;
        margin-top: -0.1rem;
    }
`;

export const heading = css`
    font-size: 4.5rem;
    font-weight: 700;
`;

export const cardContainer = css`
    margin: 2rem 0 3rem;
    border: 3px solid var(--color-blue);
    border-radius: 1.4rem;
`;

export const paymentMethods = css`
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    border-top: 1px solid #f6f6f6;
    border-bottom: 1px solid #f6f6f6;
`;

export const paymentItem = (isSelected: boolean) => css`
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 1.4rem;
    background-color: #f6f6f6;
    border: 1px solid #e1e1e1;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background-color: #eee;
    }

    ${isSelected &&
    `
       background-color: var(--color-blue);
       color: #fff;
       
       &:hover {
         background-color: var(--color-blue-button-hover);
       }
       
       svg {
            color: var(--color-blue);
       }
    `};

    &:not(:last-child) {
        margin-bottom: 0.8rem;
    }

    span {
        font-size: 1.8rem;
        font-weight: 500;
        margin-left: 2rem;
    }
`;

export const paymentHeading = css`
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
`;

export const moreOptions = css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    font-weight: 500;

    svg {
        width: 1rem;
        height: auto;
        margin-left: 0.5rem;
    }
`;

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

    a {
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

export const buttonContainer = css`
    display: flex;
    justify-content: center;

    button {
        font-size: 1.8rem;
        padding: 0.6rem 3rem;
    }
`;
