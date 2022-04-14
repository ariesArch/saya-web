import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
`;

export const cardsContainer = css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 2rem;
    column-gap: 2rem;
    margin-top: 4rem;
`;

export const card = css`
    background-color: #f6f6f6;
    border-radius: 1.4rem;
    border: 1px solid #e1e1e1;
    padding: 1.5rem 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #222;
`;

export const month = css`
    font-size: 1.6rem;
`;

export const pricesContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 0;
`;

export const discountedPrice = css`
    margin-bottom: 0.5rem;
    font-size: 1.6rem;

    strong {
        font-size: 3rem;
    }
`;

export const price = css`
    text-decoration: line-through;
`;

export const total = css`
    font-size: 1.6rem;
`;
