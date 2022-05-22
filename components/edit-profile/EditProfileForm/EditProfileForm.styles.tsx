import { css } from "@emotion/react";

export const form = css`
    display: flex;
    flex-direction: column;
`;

export const row = css`
    display: flex;
    align-items: center;
`;

export const col = css`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: 3rem;
    }
`;

export const avatarContainer = css`
    display: flex;
    align-items: center;
    margin-bottom: 4rem;
`;

export const avatar = css`
    margin-right: 2rem;
    position: relative;
`;

export const uploadIcon = css`
    position: absolute;
    right: -0.1rem;
    bottom: -0.1rem;
    padding: 0.2rem 0.6rem;
    background-color: var(--color-violet);
    color: #fff;
    border-radius: 50%;
    cursor: pointer;

    svg {
        width: 1rem;
        height: auto;
        margin-bottom: -0.1rem;
        margin-right: -0.05rem;
    }
`;

export const name = css`
    font-size: 2.8rem;
`;

export const label = css`
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
`;

export const input = css`
    padding: 1rem 1.5rem;
    border: 1px solid #d4d4d4;
    border-radius: 0.5rem;
    width: 100%;
    font-size: 1.6rem;
    transition: all 0.4s;

    &:focus {
        border-color: var(--color-blue);
    }
`;

export const genderTitle = css`
    font-size: 2rem;
    margin-bottom: 2rem;
`;

export const radioContainer = css`
    display: flex;
    align-items: center;

    label {
        font-size: 1.8rem;
        margin-left: 1rem;
        cursor: pointer;
    }

    &:not(:last-child) {
        margin-right: 4rem;
    }
`;

export const linkContainer = css`
    display: flex;
    font-size: 1.6rem;

    a {
        text-decoration: underline;
    }
`;

export const buttonsContainer = css`
    display: flex;
    margin-top: 3rem;

    button {
        border-radius: 0.8rem;
        padding: 0.6rem 2.5rem;

        &:not(:last-child) {
            margin-right: 2rem;
        }
    }
`;
