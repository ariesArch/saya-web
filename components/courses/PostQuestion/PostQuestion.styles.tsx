import { css } from "@emotion/react";

export const container = css`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 1px 3px #00000014;
    border-radius: 14px;
    padding: 1rem 2rem;

    @media only screen and (max-width: 695px) {
        flex-wrap: wrap;
    }
`;

export const textsContainer = css`
    display: flex;
    flex-direction: column;
    max-width: 20rem;

    @media only screen and (max-width: 695px) {
        max-width: unset;
        width: 100%;
        margin-bottom: 2rem;
    }
`;

export const title = css`
    font-size: 2.8rem;
    font-weight: 700;
`;

export const subtitle = css`
    font-size: 1.6rem;
`;

export const inputContainer = css`
    flex-grow: 1;
    margin: 0 2rem;

    @media only screen and (max-width: 695px) {
        margin-left: 0;
    }

    textarea {
        width: 100%;
        min-height: 8rem;
        resize: none;
        background-color: #fafafa;
        border: 1px solid #f0f0f0;
        border-radius: 8px;
        padding: 1rem 1.5rem;
        transition: all 0.2s;

        &:focus {
            border-color: var(--color-blue);
        }
    }
`;

export const button = css`
    padding: 0.6rem 1.2rem;
    font-size: 2rem;

    svg {
        width: 2rem;
        height: auto;
        margin-right: 1rem;
    }

    @media only screen and (max-width: 695px) {
        font-size: 3rem;

        svg {
            width: 2.5rem;
        }
    }
`;
