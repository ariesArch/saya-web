import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    padding: 4rem;
    align-items: center;

    @media only screen and (max-width: 445px) {
        padding: 4rem 0;
    }
`;

export const contents = css`
    display: flex;
    align-items: center;
`;

export const mainContents = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 4rem;
`;

export const heading = css`
    font-size: 5rem;
    font-weight: 400;
    color: var(--color-primary);
    margin-bottom: 5rem;

    @media only screen and (max-width: 445px) {
        font-size: 4rem;
    }
`;

export const qrContainer = css`
    width: 25rem;
    position: relative;
    padding: 3rem;
    background: linear-gradient(to right, var(--color-primary) 0.2rem, transparent 0.2rem) 0 0,
        linear-gradient(to right, var(--color-primary) 0.2rem, transparent 0.2rem) 0 100%,
        linear-gradient(to left, var(--color-primary) 0.2rem, transparent 0.2rem) 100% 0,
        linear-gradient(to left, var(--color-primary) 0.2rem, transparent 0.2rem) 100% 100%,
        linear-gradient(to bottom, var(--color-primary) 0.2rem, transparent 0.2rem) 0 0,
        linear-gradient(to bottom, var(--color-primary) 0.2rem, transparent 0.2rem) 100% 0,
        linear-gradient(to top, var(--color-primary) 0.2rem, transparent 0.2rem) 0 100%,
        linear-gradient(to top, var(--color-primary) 0.2rem, transparent 0.2rem) 100% 100%;
    background-repeat: no-repeat;
    background-size: 6rem 6rem;
    border-radius: 0.2rem;

    svg {
        width: 100%;
        height: auto;
    }
`;

export const expiration = css`
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
`;

export const buttonsContainer = css`
    display: flex;
    flex-direction: column;

    button {
        border-radius: 0.8rem;

        &:not(:last-child) {
            margin-bottom: 1rem;
        }

        &:last-child {
            border-color: #e5e5e5;

            &:hover {
                border-color: var(--color-primary);
            }
        }
    }
`;

export const warning = css`
    margin: 2rem 0;
    color: var(--color-primary);
    text-align: center;
    font-size: 2rem;
`;

export const instructions = css`
    font-size: 1.8rem;
    font-weight: 500;
`;

export const imageContainer = css`
    width: 30rem;
    height: 30rem;
    position: relative;
    border-radius: 5rem;
    overflow: hidden;
    margin-bottom: 4rem;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const button = css`
    align-self: center;
    margin-top: 4rem;
`;
