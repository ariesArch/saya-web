import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    margin-top: 10rem;
    margin-bottom: 10rem;
`;

export const aboutCourse = css`
    display: flex;

    @media only screen and (max-width: 992px) {
        margin-bottom: 3rem;
    }

    @media only screen and (max-width: 695px) {
        flex-direction: column-reverse;
    }
`;

export const aboutSchedule = css`
    display: flex;
    align-items: center;

    @media only screen and (max-width: 695px) {
        flex-direction: column;
        align-items: unset;
    }
`;

export const illuContainer = css`
    width: 55%;
    padding-top: 4rem;

    @media only screen and (max-width: 695px) {
        width: 100%;
        padding: 0 3rem;
    }

    @media only screen and (max-width: 545px) {
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
        padding: 0 3rem 0 3rem;
    }

    @media only screen and (max-width: 992px) {
        margin-bottom: 5rem;
    }

    @media only screen and (max-width: 695px) {
        width: 100%;
        padding: 0 6rem;
        margin-bottom: 6rem;
    }

    @media only screen and (max-width: 545px) {
        padding: 0 3rem;
    }
`;

export const textSection = css`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: 4rem;

        @media only screen and (max-width: 992px) {
            margin-bottom: 2rem;
        }
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
