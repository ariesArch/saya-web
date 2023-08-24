import { css } from "@emotion/react";

export const container = (isCorrect: boolean) => css`
    display: flex;
    flex-direction: column;
    padding: 2rem 3rem;
    width: calc(100% - 12rem);
    background-color: #fff;
    color: var(--default-font-color);
    border-radius: 1.4rem;
    margin: 2rem 0;

    ${isCorrect &&
    `
        align-items: center;
        text-align: center;
        padding: 3rem 10rem;
    `};

    @media only screen and (max-width: 992px) {
        width: calc(100% - 20rem);
    }

    @media only screen and (max-width: 645px) {
        width: calc(100% - 12rem);
    }

    @media only screen and (max-width: 545px) {
        width: calc(100% - 4rem);
    }

    @media only screen and (max-width: 445px) {
        width: 100%;
    }
`;

export const iconContainer = css`
    width: 6rem;
    color: var(--color-green);

    svg {
        width: 100%;
        height: auto;
    }
`;

export const textContainer = css`
    display: flex;
    flex-direction: column;
`;

export const heading = css`
    font-size: 3.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
`;

export const subHeading = css`
    font-size: 1.6rem;
    width: 60%;
`;

export const text = css`
    font-size: 1.8rem;
`;

export const header = css`
    display: flex;
    align-items: flex-start;
    margin-bottom: 2rem;

    svg {
        width: 4.5rem;
        height: auto;
        margin-right: 1rem;
        animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    }

    @keyframes shake {
        10%,
        90% {
            transform: translate3d(-0.5px, 0, 0);
        }

        20%,
        80% {
            transform: translate3d(1px, 0, 0);
        }

        30%,
        50%,
        70% {
            transform: translate3d(-2px, 0, 0);
        }

        40%,
        60% {
            transform: translate3d(2px, 0, 0);
        }
    }
`;

export const explanation = css`
    display: flex;
    flex-direction: column;
    background-color: #fafafa;
    border-radius: 1.4rem;
    padding: 1.5rem 2rem;
    font-size: 1.6rem;
    word-break: break-all;
`;

export const button = css`
    align-self: center;
    margin-top: 1.5rem;
`;
