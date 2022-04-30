import { css } from "@emotion/react";

export const modal = (isOpen: boolean) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000001;
    display: ${isOpen ? "flex" : "none"};
    justify-content: center;
    align-items: center;
`;

export const modalContents = css`
    background-color: #fff;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 5rem 10rem;

    @media only screen and (max-width: 695px) {
        padding: 2rem 4rem;
    }
`;

export const closeButton = css`
    position: absolute;
    width: 2.5rem;
    height: 2.5rem;
    top: 3rem;
    right: 4rem;
    border-radius: 50%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);

    @media only screen and (max-width: 695px) {
        width: 4rem;
        height: 4rem;
        top: 2rem;
        right: 3rem;
    }

    svg {
        width: 100%;
        height: 100%;
    }
`;

export const body = css`
    display: flex;
    flex-direction: column;
`;
