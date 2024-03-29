import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto 0;
    padding-bottom: 10rem;
`;

export const heading = css`
    font-size: 4rem;
    margin-bottom: 3rem;
`;

export const illuContainer = css`
    margin: 3rem 0;
    width: 100%;

    svg {
        width: 100%;
        height: auto;
    }
`;

export const button = css`
    color: var(--color-light-green);
    font-size: 2rem;
    padding: 1rem 4rem;
`;
