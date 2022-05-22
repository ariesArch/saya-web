import { css } from "@emotion/react";

export const form = css`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: 4rem;
    overflow: hidden;
`;

export const heading = css`
    font-size: 4.2rem;
    text-align: center;
    color: var(--color-violet-light);
    margin-bottom: 5rem;

    @media only screen and (max-width: 425px) {
        font-size: 3.5rem;
    }
`;

export const col = css`
    display: flex;
    flex-direction: column;
    justify-self: flex-start;
    overflow: hidden;
`;

export const inputContainer = css`
    display: flex;
    flex-direction: column;
`;

export const label = css`
    font-size: 1.8rem;
    margin-bottom: 1rem;
`;

export const tip = css`
    font-size: 1.5rem;
    margin-top: 2rem;
`;

export const otpTip = css`
    font-size: 1.8rem;
    margin-bottom: 2rem;
    text-align: center;

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

export const buttonsContainer = css`
    display: flex;
    margin-top: auto;
    margin-left: auto;

    button {
        border-radius: 0.8rem;
        padding: 0.6rem 2.5rem;

        &:not(:last-child) {
            margin-right: 2rem;
        }
    }
`;
