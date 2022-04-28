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

export const inputContainer = css`
    width: 100%;
    display: flex;
    border-radius: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.09);
    background-color: #fdfdfd;
`;

export const iconContainer = css`
    display: flex;
    align-items: center;
    flex-shrink: 0;
    padding: 1rem;
    border-right: 1px solid rgba(0, 0, 0, 0.09);

    img {
        width: 3rem !important;
        height: auto;
    }

    span {
        margin-left: 1rem;
        font-size: 1.8rem;
        font-weight: 500;
        color: var(--font-color-dark);

        @media only screen and (max-width: 695px) {
            font-size: 2rem;
        }
    }
`;

export const input = css`
    flex-grow: 1;
    border: none;
    padding: 0 1rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    font-size: 1.6rem;
    background-color: inherit;
    transition: all 0.4s;

    @media only screen and (max-width: 695px) {
        font-size: 1.9rem;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    &[type="number"] {
        -moz-appearance: textfield;
    }

    &:focus {
        border: 1px solid var(--color-light-green);
        box-shadow: 0 0 2px rgba(102, 175, 233, 0.5);
    }
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

export const timer = css`
    text-align: center;
    font-size: 1.8rem;
    margin-top: 1rem;
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
