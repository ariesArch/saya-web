import { css } from "@emotion/react";

export const item = (isRead: boolean) => css`
    display: flex;
    align-items: flex-start;
    padding: 2rem 8rem 2rem 10rem;
    border-bottom: 1px solid #d4d4d4;
    width: 100%;
    ${isRead && `opacity: 0.85;`};
    cursor: default;

    @media only screen and (max-width: 745px) {
        padding: 2rem;
    }
`;

export const iconContainer = css`
    color: var(--color-green);

    svg {
        width: 2.2rem;
        height: 2.2rem;
    }
`;
export const contents = css`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin: -0.4rem 8rem 0 4rem;

    @media only screen and (max-width: 745px) {
        margin: -0.4rem 6rem 0 4rem;
    }

    @media only screen and (max-width: 445px) {
        margin: -0.4rem 2rem 0 2rem;
    }
`;

export const title = css`
    font-size: 2.6rem;
    margin-bottom: 1rem;
    font-weight: bold;

    @media only screen and (max-width: 745px) {
        font-size: 2rem;
    }
`;

export const text = css`
    font-size: 1.8rem;

    @media only screen and (max-width: 745px) {
        font-size: 1.6rem;
    }
`;

export const statusContainer = css`
    width: 2rem;
    display: flex;
    justify-content: center;
    padding-top: 0.2rem;
    margin: 0 3rem;

    @media only screen and (max-width: 745px) {
        margin: 0 1rem;
    }
`;

export const status = css`
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    background-color: var(--color-blue);
`;

export const dateContainer = css`
    display: flex;
    flex-direction: column;
    flex-basis: 12rem;
    flex-shrink: 0;

    @media only screen and (max-width: 745px) {
        flex-basis: 8rem;
    }
`;

export const date = css`
    font-size: 1.8rem;

    @media only screen and (max-width: 745px) {
        font-size: 1.4rem;
    }
`;
