import { css } from "@emotion/react";

export const container = (isPopular: boolean) => css`
    display: flex;
    flex-direction: column;
    border-radius: 1.4rem;
    background-color: #f6f6f6;

    ${isPopular &&
    `
       background-color: var(--color-blue);
    `};
`;

export const popularBadge = css`
    position: absolute;
    top: -3.2rem;
    left: 0;
    right: 0;
    background-color: var(--color-blue);
    z-index: -1;

    display: flex;
    justify-content: center;
    padding: 0.5rem 2rem 4rem;
    font-size: 1.8rem;
    font-weight: 500;
    color: #fff;
    border-radius: 1.4rem;

    svg {
        width: 1.6rem;
        height: auto;
        margin-right: 0.8rem;
    }
`;

export const card = css`
    height: 100%;
    background-color: #f6f6f6;
    border-radius: 1.4rem;
    border: 1px solid #e1e1e1;
    padding: 1.5rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #222;
    position: relative;

    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background-color: #eee;
    }

    &:active {
        background-color: #f6f6f6;
    }
`;

export const month = css`
    font-size: 1.8rem;
`;

export const pricesContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
`;

export const discountedPrice = css`
    display: flex;
    margin-bottom: 0.5rem;
    font-size: 1.6rem;

    strong {
        font-size: 3rem;
        margin: -0.4rem 1rem 0 0.6rem;
    }
`;

export const price = css`
    text-decoration: line-through;
    font-size: 1.5rem;
`;

export const total = css`
    font-size: 1.6rem;
    text-align: center;
`;

export const discount = css`
    position: absolute;
    left: 0;
    top: 1rem;
    font-size: 1.3rem;
    color: #fff;
    background-color: var(--color-blue);
    padding: 0.1rem 0.4rem;
    border-radius: 1rem;
`;
