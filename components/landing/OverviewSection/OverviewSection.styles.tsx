import { css } from "@emotion/react";

import { clickEffect } from "@/components/common/commonStyles";

export const container = css`
    display: flex;
    padding: 5rem 0;

    @media only screen and (max-width: 900px) {
        padding: 3rem 0;
    }

    @media only screen and (max-width: 695px) {
        flex-direction: column;
    }

    @media only screen and (max-width: 545px) {
        padding: 1.5rem 0 3rem;
    }
`;

export const contents = css`
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 695px) {
        margin-bottom: 10rem;
    }
`;

export const textsContainer = css`
    display: flex;
    flex-direction: column;
    margin-bottom: 5rem;
    padding: 1rem 1rem 1rem 5rem;

    @media only screen and (max-width: 992px) {
        padding-left: 3rem;
    }
`;

export const headingContainer = css`
    width: fit-content;
`;

export const heading = css`
    font-weight: 700;
    font-size: 6rem;
    color: var(--font-color-dark);

    @media only screen and (max-width: 1245px) {
        font-size: 5rem;
    }

    @media only screen and (max-width: 478px) {
        font-size: 4rem;
    }
`;

export const tipContainer = css`
    position: relative;
`;

export const headingTips = css`
    display: flex;
    align-items: center;
    position: absolute;
    bottom: calc(100% + 1rem);
    left: calc(100% - 10rem);
    white-space: nowrap;

    @media only screen and (max-width: 1105px) {
        display: none;
    }
`;

export const headingTooltip = css`
    font-weight: 400;
    font-size: 2.3rem;
    color: #fff;
    background-color: var(--color-primary);
    border-radius: 1.2rem 1.2rem 1.2rem 0;
    padding: 0 0.8rem;
    position: relative;

    @media only screen and (max-width: 1245px) {
        font-size: 1.8rem;
    }

    &::after {
        content: "";
        position: absolute;
        top: 54%;
        left: -1.2rem;
        border-width: 1.2rem;
        border-style: solid;
        border-color: var(--color-primary) transparent transparent transparent;
        transform: rotate(-222deg);

        @media only screen and (min-width: 100em) {
            transform: rotate(-225deg);
        }

        @media only screen and (max-width: 1245px) {
            top: 46%;
            left: -1rem;
            border-width: 1rem;
        }
    }
`;

export const additionalTip = css`
    font-size: 2.5rem;
    font-family: Mistral, serif;
    margin-left: 1rem;
    font-weight: 300;
    color: var(--color-primary);

    @media only screen and (max-width: 1245px) {
        font-size: 2rem;
    }
`;

export const subHeading = css`
    font-size: 2.3rem;
    font-weight: 500;

    @media only screen and (max-width: 1245px) {
        font-size: 2rem;
    }
`;

export const illuContainer = css`
    width: 100%;

    svg {
        width: 100%;
        height: auto;
    }
`;

export const loginContainer = css`
    flex-basis: 58rem;
    align-self: flex-start;
    background-color: var(--color-primary);
    border-radius: 2rem;
    transform: skewY(-10deg);
    padding: 7rem 2.5rem;
    margin: 0 5rem 0 4rem;

    @media only screen and (max-width: 992px) {
        margin-right: 2rem;
    }

    @media only screen and (max-width: 695px) {
        flex-basis: unset;
        width: calc(100% - 20rem);
        margin: 0 10rem;
        padding: 10rem 2.5rem;
    }

    @media only screen and (max-width: 545px) {
        width: calc(100% - 6rem);
        margin: 0 3rem;
    }

    @media only screen and (max-width: 425px) {
        width: calc(100% - 3rem);
        padding: 7rem 1.5rem;
        margin: 0 1.5rem;
    }
`;

export const login = css`
    transform: skewY(10deg);
`;

export const loginHeading = css`
    color: #fff;
    font-weight: 700;
    font-size: 4rem;

    @media only screen and (max-width: 1245px) {
        font-size: 3.5rem;
    }
`;

export const downloadLinksContainer = css`
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
`;

export const downloadHeading = css`
    display: inline-block;
    color: #fff;
    margin-bottom: 1rem;
    font-size: 1.8rem;
    font-weight: 500;
`;

export const downloadLinks = css`
    display: grid;
    grid-template-columns: repeat(2, 17rem);
    row-gap: 1rem;
    column-gap: 1rem;

    @media only screen and (max-width: 1255px) {
        grid-template-columns: repeat(2, 15rem);
    }
    @media only screen and (max-width: 695px) {
        grid-template-columns: repeat(2, 17rem);
    }
`;

export const button = css`
    background-color: #d12a33;
    padding: 0.8rem 1rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    width: 100%;

    ${clickEffect};

    &:hover {
        transform: scale(1.02);
    }

    svg {
        width: 3rem;
        height: auto;

        @media only screen and (max-width: 1255px) {
            width: 2.5rem;
        }

        @media only screen and (max-width: 695px) {
            width: 3rem;
        }
    }
`;

export const textContainer = css`
    display: flex;
    flex-direction: column;
    color: #fff;
    margin-left: 0.8rem;
    font-family: "Product Sans", sans-serif;
`;

export const btnTextSubHeading = css`
    font-size: 1rem;

    @media only screen and (max-width: 1255px) {
        font-size: 0.9rem;
    }

    @media only screen and (max-width: 695px) {
        font-size: 1.3rem;
    }
`;

export const btnTextHeading = css`
    font-size: 1.6rem;
    font-weight: bold;

    @media only screen and (max-width: 1255px) {
        font-size: 1.5rem;
    }

    @media only screen and (max-width: 695px) {
        font-size: 1.7rem;
    }
`;
