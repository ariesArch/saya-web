import { css } from "@emotion/react";

export const container = css`
    display: flex;
    align-items: center;
    padding: 5rem 0;

    @media only screen and (max-width: 695px) {
        flex-direction: column;
        padding: 0;
    }
`;

export const illuContainer = css`
    width: 55%;

    @media only screen and (max-width: 1245px) {
        width: 50%;
    }

    @media only screen and (max-width: 695px) {
        width: 100%;
        padding: 0 6rem;
    }

    @media only screen and (max-width: 545px) {
        padding: 0 3rem;
    }

    @media only screen and (max-width: 478px) {
        padding: 0 1.5rem;
    }

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

    @media only screen and (max-width: 1245px) {
        width: 50%;
    }

    @media only screen and (max-width: 992px) {
        padding: 0 3rem 0 3rem;
    }

    @media only screen and (max-width: 695px) {
        width: 100%;
        padding: 0 6rem;
    }

    @media only screen and (max-width: 545px) {
        padding: 0 3rem;
    }
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

export const subHeading = css`
    font-size: 2.5rem;
    font-weight: 500;

    @media only screen and (max-width: 1245px) {
        font-size: 2rem;
    }
`;
