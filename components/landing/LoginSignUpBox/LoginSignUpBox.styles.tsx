import { css } from "@emotion/react";

export const container = css`
    padding: 2rem 1.5rem;
    background-color: #fff;
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    margin-bottom: 8rem;
    overflow: hidden;
`;

export const col = css`
    display: flex;
    flex-direction: column;
`;

export const otpInputContainer = css`
    display: flex;
    flex-direction: column;

    input {
        @media only screen and (max-width: 695px) {
            width: 5.5rem !important;
            height: 5.5rem !important;
        }

        @media only screen and (max-width: 545px) {
            width: 5rem !important;
            height: 5rem !important;
        }

        @media only screen and (max-width: 425px) {
            width: 4rem !important;
            height: 4rem !important;
        }
    }
`;

export const optTextsContainer = css`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
`;

export const optHeader = css`
    display: flex;
    align-items: center;
`;

export const backBtn = css`
    cursor: pointer;
    padding: 0.5rem;
`;

export const optHeading = css`
    flex-grow: 1;
    font-size: 4rem;
    font-weight: 700;
    text-align: center;

    @media only screen and (max-width: 1245px) {
        font-size: 3.5rem;
    }

    @media only screen and (max-width: 478px) {
        font-size: 3rem;
    }
`;

export const optSubHeading = css`
    font-size: 1.6rem;
    text-align: center;

    @media only screen and (max-width: 478px) {
        font-size: 1.4rem;
    }

    span {
        text-decoration: underline;
    }
`;

export const error = css`
    text-align: center;
    margin-top: 1rem;
    color: var(--color-primary-dark);
    font-size: 1.5rem;
    font-weight: 500;
`;

export const button = css`
    align-self: flex-end;
    padding: 0.6rem 3rem;
    margin-top: 1rem;

    @media only screen and (max-width: 695px) {
        font-size: 2rem;
        padding: 0.6rem 4rem;
    }
`;
