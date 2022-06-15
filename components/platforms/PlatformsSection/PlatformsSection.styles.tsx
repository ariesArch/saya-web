import { css } from "@emotion/react";

import { clickEffect } from "@/components/common/commonStyles";

export const container = css`
    display: flex;
    align-items: center;
    padding: 2rem 0 2rem;
    position: relative;
    min-height: calc(100vh - 22rem);

    @media only screen and (max-width: 695px) {
        flex-direction: column-reverse;
        padding: 0;
    }
`;

export const illuContainer = css`
    width: 45%;
    padding-left: 10rem;
    position: relative;

    @media only screen and (max-width: 992px) {
        width: 50%;
    }

    @media only screen and (max-width: 695px) {
        width: 100%;
        padding: 2rem 10rem 10rem;
    }

    @media only screen and (max-width: 545px) {
        padding: 2rem 5rem 10rem 10rem;
    }

    @media only screen and (max-width: 478px) {
        padding: 0 2.5rem 5rem 5rem;
    }

    svg {
        width: 100%;
        height: auto;
    }
`;

export const leftSideDots = css`
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);

    @media only screen and (max-width: 695px) {
        display: none;
    }
`;

export const contents = css`
    width: 55%;
    display: flex;
    flex-direction: column;
    padding: 0 3rem 0 5rem;

    @media only screen and (max-width: 992px) {
        padding: 0 3rem 0 3rem;
        width: 50%;
    }

    @media only screen and (max-width: 695px) {
        width: 100%;
        padding: 5rem 6rem 8rem;
    }

    @media only screen and (max-width: 545px) {
        padding: 2rem 3rem 8rem;
    }
`;

export const downloadLinksContainer = css`
    display: flex;
    flex-direction: column;
`;

export const downloadLinks = css`
    display: flex;
    justify-content: center;

    &:not(:last-child) {
        margin-bottom: 2rem;

        @media only screen and (max-width: 992px) {
            margin-bottom: 0;
        }
    }

    & > a:not(:last-child) {
        margin-right: 3rem;

        @media only screen and (max-width: 992px) {
            margin-right: 0;
        }
    }

    @media only screen and (max-width: 992px) {
        flex-direction: column;
        align-items: center;

        &:not(:last-child) {
            & > a {
                margin-bottom: 1.5rem;
            }
        }
    }
`;

export const button = css`
    background-color: var(--color-primary);
    padding: 1rem 2rem;
    border-radius: 1.4rem;
    display: flex;
    align-items: center;
    width: fit-content;

    ${clickEffect};

    &:hover {
        transform: scale(1.02);
    }

    @media only screen and (max-width: 992px) {
        width: 21rem;
    }

    @media only screen and (max-width: 695px) {
        width: 27rem;
    }

    svg {
        width: 4rem;
        height: auto;

        @media only screen and (max-width: 1245px) {
            width: 3rem;
        }

        @media only screen and (max-width: 695px) {
            width: 4rem;
        }
    }
`;

export const textContainer = css`
    display: flex;
    flex-direction: column;
    color: #fff;
    margin-left: 1.5rem;
    font-family: "Product Sans", sans-serif;
`;

export const btnTextSubHeading = css`
    font-size: 1.3rem;

    @media only screen and (max-width: 1245px) {
        font-size: 1.2rem;
    }

    @media only screen and (max-width: 695px) {
        font-size: 1.3rem;
    }
`;

export const btnTextHeading = css`
    font-size: 2.5rem;
    font-weight: bold;

    @media only screen and (max-width: 1245px) {
        font-size: 2rem;
    }

    @media only screen and (max-width: 695px) {
        font-size: 2.7rem;
    }
`;

export const dots = css`
    position: absolute;
    top: calc(50% - 4rem);
    right: 0;
    transform: translateY(-50%);
    width: 6rem;

    @media only screen and (max-width: 695px) {
        display: none;
    }

    svg {
        width: 100%;
        height: auto;
    }
`;
