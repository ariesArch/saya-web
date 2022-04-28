import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 1.5rem 2rem;
    border-radius: 1rem;
    width: fit-content;
    box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.14);

    @media only screen and (max-width: 695px) {
        margin: 0 auto;
    }
`;

export const header = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
`;

export const month = css`
    font-size: 1.4rem;
    text-transform: uppercase;
`;

export const avg = css`
    font-weight: 600;
    font-size: 2rem;

    span {
        font-size: 1.4rem;
        font-weight: 400;
    }
`;

export const table = css`
    display: flex;
`;

export const dayItem = css`
    display: flex;
    flex-direction: column;
    align-items: center;

    &:not(:last-child) {
        margin-right: 2rem;
    }
`;

export const iconContainer = (status: string) => css`
    ${status === "active" &&
    `
        color: var(--color-violet-light);
    `};
    ${status === "inactive" &&
    `
        color: var(--color-gray);
    `};
    ${status === "undetermined" &&
    `
        margin-top: .5rem;
        font-size: 2rem;
    `};
`;

export const day = css`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.3rem;
`;

export const percent = css``;
