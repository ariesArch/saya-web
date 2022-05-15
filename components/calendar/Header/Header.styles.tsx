import { css } from "@emotion/react";

export const header = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #f5f5f5;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 50;
    background-color: #fff;
    padding-left: 8rem;
    padding-right: 4rem;
`;

export const heading = css`
    font-size: 4rem;
    font-weight: 700;
    padding-top: 1rem;
    padding-bottom: 1rem;
    color: var(--color-violet-light);

    @media only screen and (max-width: 495px) {
        font-size: 4rem;
    }
`;

export const schedule = css`
    display: flex;
    align-items: center;
`;

export const text = css`
    font-size: 1.6rem;
    margin-right: 0.5rem;
`;

export const switchContainer = css`
    display: flex;
    align-items: center;
    margin-left: 0.5rem;
`;
