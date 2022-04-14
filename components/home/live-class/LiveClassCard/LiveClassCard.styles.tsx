import { css } from "@emotion/react";

export const container = (status: string) => css`
    display: flex;
    flex-direction: column;
    width: fit-content;
    border-radius: 1.4rem;
    background-color: #f7f7f7;

    ${status === "live" &&
    `
        background-color: var(--color-primary);
    `};
`;

export const card = css`
    display: flex;
    background-color: #fff;
    border-radius: 1rem;
    box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.14);
    padding: 0.4rem;
`;

export const imageContainer = css`
    width: 13rem;
    min-height: 18rem;
    position: relative;
    flex-shrink: 0;

    img {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover;
        border-radius: 1rem;
    }
`;

export const classInfo = css`
    display: flex;
    flex-direction: column;
    padding: 1rem 1.5rem;
`;

export const date = (isNotify: boolean) => css`
    font-size: 1.4rem;
    font-weight: 600;
    padding: 0.5rem 1.5rem;
    border-radius: 4rem;
    background-color: #fafafa;
    border: 0.5px solid #ebebeb;
    width: fit-content;
    display: flex;
    align-items: center;

    ${isNotify && `color: var(--color-green);`};

    svg {
        width: 1.6rem;
        height: auto;
        margin-right: 0.5rem;
    }
`;

export const mainTexts = css`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
`;

export const title = css`
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 0.2rem;
`;

export const subtitles = css`
    display: flex;
    align-items: center;

    svg {
        width: 1.6rem;
        height: auto;
        color: var(--color-primary);
        margin-right: 0.5rem;
        flex-shrink: 0;
    }
`;

export const buttonContainer = css`
    margin-top: 1rem;

    button {
        padding: 0.4rem 1.2rem;
        font-weight: 600;

        svg {
            width: 1.8rem;
            height: auto;
            margin-right: 0.5rem;
        }
    }
`;

export const footer = css`
    display: flex;
    justify-content: center;
    padding: 0.5rem;
`;

export const liveText = css`
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    font-weight: 600;
    color: #fff;

    svg {
        margin-right: 0.5rem;
    }
`;

export const timer = css`
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    padding-top: 0.2rem;

    svg {
        width: 1.4rem;
        height: auto;
    }
`;

export const timeCounter = css`
    margin-left: 0.5rem;
`;
