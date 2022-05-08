import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    color: #fff;
`;

export const header = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4rem;
`;

export const heading = css`
    font-size: 2.5rem;
    font-weight: 600;
    margin-top: 1rem;
`;

export const details = css`
    display: flex;
    align-items: center;
`;

export const detailsItem = css`
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.14);
    border-radius: 3.8rem;
    font-size: 3rem;
    font-weight: 600;
    padding: 0.3rem 4rem;

    &:not(:last-child) {
        margin-right: 1rem;
    }
`;

export const iconContainer = css`
    display: flex;
    align-items: center;

    svg {
        width: 2.5rem;
        height: auto;
        margin-left: 0.4rem;
    }

    &:not(:last-child) {
        margin-right: 3rem;
    }
`;

export const label = css`
    display: inline-block;
    font-size: 1.6rem;
    font-weight: 500;
    margin-left: 1rem;
    margin-bottom: -0.8rem;
`;

export const buttonsContainer = css`
    display: flex;
    align-items: center;
    margin-top: 10rem;
`;

export const button = css`
    font-size: 1.8rem;
    font-weight: 500;
    color: #fff;
    text-decoration: underline;
    display: flex;
    align-items: center;

    &:not(:last-child) {
        margin-right: 5rem;
    }

    svg {
        margin-right: 0.5rem;
    }
`;
