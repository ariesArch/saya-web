import { css } from "@emotion/react";

export const modal = (isOpen: boolean) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    z-index: 1000000;
    display: ${isOpen ? "flex" : "none"};
    justify-content: center;
`;

export const closeButton = css`
    position: absolute;
    top: 5rem;
    left: 8rem;

    svg {
        width: 4rem;
        height: auto;
    }
`;

export const modalContents = css`
    display: flex;
    width: 80%;
`;

export const illuContainer = css`
    width: 50%;
    align-self: center;
    flex-shrink: 0;

    svg {
        width: 60%;
        height: auto;
    }
`;

export const mainContents = css`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    width: 50%;
`;
