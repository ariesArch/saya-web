import { css } from "@emotion/react";

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
        border: 1px solid var(--color-primary);
        box-shadow: 0 0 2px var(--color-primary-button-hover);
    }
`;
