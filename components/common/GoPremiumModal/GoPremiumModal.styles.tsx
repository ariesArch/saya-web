import { css } from "@emotion/react";

export const modal = (isOpen: boolean) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 1000000;
    display: ${isOpen ? "flex" : "none"};
    justify-content: center;
    align-items: center;
`;

export const closeButton = css`
    position: absolute;
    top: 3rem;
    left: 3rem;
`;

export const modalContents = css`
    display: flex;
    align-items: center;
    width: 80%;
    padding: 20rem 0;
`;

export const illuContainer = css`
    flex-basis: 50%;
    padding: 0 12rem;

    svg {
        width: 100%;
        height: auto;
    }
`;

export const mainContents = css`
    display: flex;
    flex-direction: column;
`;

export const header = css`
    display: flex;
    align-items: center;
`;

export const headerIcon = css`
    padding: 0.5rem 0.4rem;
    border-radius: 0.8rem;
    background-color: var(--color-blue);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    color: #fff;

    svg {
        width: 2.5rem;
        height: auto;
    }
`;

export const heading = css`
    font-size: 4.5rem;
    font-weight: 700;
`;

export const descriptions = css`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    padding-left: 0.5rem;
`;

export const descriptionItem = css`
    display: flex;
    align-items: center;
    font-size: 2rem;
    font-weight: 600;

    svg {
        width: 2.5rem;
        height: auto;
        margin-right: 1rem;
        color: var(--color-blue);
    }

    &:not(:last-child) {
        margin-bottom: 1rem;
    }
`;
