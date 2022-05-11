import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;
    padding: 0 12%;
    position: relative;

    @media only screen and (max-width: 1325px) {
        padding: 0;
    }
`;

export const contents = css`
    display: flex;
    flex-direction: column;
    padding: 0 6rem;
    margin-top: 6rem;
    align-items: center;

    @media only screen and (max-width: 478px) {
        padding: 0;
    }
`;

export const mainContents = css`
    display: flex;
    flex-direction: column;
`;

export const label = css`
    font-size: 1.4rem;
    align-self: center;
    margin-bottom: 1rem;
`;

export const navBtn = (isRight: boolean) => css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 2rem;
    ${isRight
        ? `
            right: 0;
            transform: translateY(-50%) rotate(180deg);
        `
        : `left: 0;`};
    color: #fff;
    transition: all 0.2s;
    z-index: 4;

    &:hover {
        transform: ${isRight
            ? `translateY(-50%) rotate(180deg) scale(1.05)`
            : `translateY(-50%) scale(1.05)`};
    }

    &:active {
        transform: ${isRight
            ? `translateY(-50%) rotate(180deg) scale(1.01)`
            : `translateY(-50%) scale(1.01)`};
    }

    svg {
        width: 100%;
        height: auto;
    }

    @media only screen and (max-width: 478px) {
        top: 0;
        width: 3rem;

        ${isRight
            ? `
            right: -1rem;
            transform: translateY(-50%) rotate(180deg);
        `
            : `left: -1rem;`};

        &:hover {
            transform: ${isRight ? `translateY(-50%) rotate(180deg)` : `translateY(0)`};
        }

        &:active {
            transform: ${isRight ? `translateY(-50%) rotate(180deg)` : `translateY(0)`};
        }
    }
`;

export const explanationContainer = css`
    display: flex;
    flex-direction: column;
    color: #fff;
    padding: 2.5rem 2rem;
    margin-bottom: 10rem;
    background-color: #0000000d;
    border-radius: 1.4rem;
    min-width: 100%;
`;

export const explanationHeader = css`
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;

    svg {
        width: 2.5rem;
        height: auto;
    }
`;

export const explanationHeading = css`
    font-size: 2.2rem;
    font-weight: 600;
`;

export const explanation = css`
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
    word-break: break-all;
`;
