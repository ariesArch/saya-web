import { css } from "@emotion/react";

export const button = css`
    display: flex;
    align-items: center;
    background-color: var(--color-blue);
    border-radius: 1rem;
    position: fixed;
    bottom: 2.5rem;
    left: 4rem;
    z-index: 100000;
    color: #fff;
    transition: all 0.2s;

    @media only screen and (max-width: 695px) {
        bottom: 10rem;
    }

    &:hover {
        transform: scale(1.01);
    }

    &:active {
        transform: scale(0.99);
    }
`;

export const crownIconContainer = css`
    margin-left: -1.5rem;
    transform: scale(1.4);
    border: 2px solid #fff;
    border-radius: 50%;
    padding: 0.5rem;
    background-color: var(--color-blue);
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 2rem;
        height: auto;
    }
`;

export const buttonTexts = css`
    padding: 0.4rem 1rem 0.4rem 0;
    margin-left: 1.5rem;
    display: flex;
    flex-direction: column;
    text-align: left;

    @media only screen and (max-width: 695px) {
        display: none;
    }
`;

export const buttonTitle = css`
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    font-weight: 600;
    white-space: nowrap;

    & > svg {
        margin-left: 0.5rem;
        width: 0.7rem;
    }
`;

export const buttonSubtitle = css``;
