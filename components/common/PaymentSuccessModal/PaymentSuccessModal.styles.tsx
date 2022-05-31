import { css } from "@emotion/react";

export const modalContents = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const illuContainer = css`
    flex-shrink: 0;
`;

export const textContainer = css`
    display: flex;
    flex-direction: column;
    text-align: center;
    max-width: 38rem;
    margin: 2rem 0 3rem;
`;

export const heading = css`
    color: var(--color-violet-light);
    font-size: 4rem;
    font-weight: 400;
    margin-bottom: 2rem;
`;

export const text = css`
    font-size: 2rem;
    font-weight: 600;
`;

export const button = css`
    border-radius: 0.6rem;
`;
