import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.14);
    margin-bottom: 2rem;
`;

export const contents = css`
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
`;

export const iconContainer = css`
    width: 6rem;
    height: 6rem;
    margin-right: 1.5rem;

    svg {
        width: 100%;
        height: auto;
    }
`;

export const table = css`
    display: flex;
    flex-direction: column;
`;

export const tableHeading = css`
    font-size: 2.2rem;
    font-weight: 600;
    color: var(--color-violet-light);
`;

export const tableContents = css`
    display: flex;
`;

export const column = css`
    display: flex;
    flex-direction: column;
    align-items: center;

    &:not(:last-child) {
        margin-right: 0.5rem;
    }
`;

export const day = css`
    font-size: 1.4rem;
`;

export const dayIcon = (status: string) => css`
    width: 2rem;
    ${status === "active" &&
    `
        color: var(--color-violet-light);
    `};
    ${status === "inactive" &&
    `
        color: var(--color-gray);
    `};

    svg {
        width: 100%;
        height: auto;
    }
`;

export const undeterminedIcon = css`
    width: 1.7rem;
    height: 1.7rem;
    border: 0.2rem solid var(--color-violet-light);
    border-radius: 50%;
    margin-top: 0.1rem;
`;

export const footer = css`
    display: flex;
    align-items: center;
    padding: 0.7rem 3rem;
    border-top: 1px solid #f5f5f5;
`;

export const footerIcon = css`
    width: 1.6rem;
    margin-right: 0.5rem;

    svg {
        width: 100%;
        height: auto;
    }
`;

export const footerText = css`
    font-size: 1.6rem;
`;
