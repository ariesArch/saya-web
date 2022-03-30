import { css } from "@emotion/react";

export const container = css`
    display: flex;
    align-items: center;
    padding: 5rem 0;
`;

export const illuContainer = css`
    width: 55%;

    svg {
        width: 100%;
        height: auto;
    }
`;

export const contents = css`
    width: 45%;
    display: flex;
    flex-direction: column;
    padding: 0 3rem 0 5rem;
`;

export const heading = css`
    font-weight: 700;
    font-size: 6rem;
    color: var(--font-color-dark);
`;

export const subHeading = css`
    font-size: 2.5rem;
    font-weight: 500;
`;
