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

    @media only screen and (max-width: 745px) {
        left: unset;
        right: 5rem;
    }

    svg {
        width: 4rem;
        height: auto;
    }
`;

export const modalContents = css`
    display: flex;
    width: 80%;

    @media only screen and (max-width: 1245px) {
        width: 100%;
        padding: 0 5rem;
    }

    @media only screen and (max-width: 545px) {
        padding: 0 3rem;
    }
`;

export const illuContainer = css`
    width: 50%;
    align-self: center;
    flex-shrink: 0;

    svg {
        width: 60%;
        height: auto;
    }

    @media only screen and (max-width: 1245px) {
        width: 40%;
        padding-right: 10rem;

        svg {
            width: 100%;
        }
    }

    @media only screen and (max-width: 992px) {
        padding-right: 5rem;
    }

    @media only screen and (max-width: 745px) {
        display: none;
    }
`;

export const mainContents = css`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    width: 50%;

    @media only screen and (max-width: 1245px) {
        width: 60%;
    }

    @media only screen and (max-width: 745px) {
        width: 100%;
        padding: 5rem 6rem;
        align-self: center;
    }

    @media only screen and (max-width: 692px) {
        padding: 5rem 3rem;
    }

    @media only screen and (max-width: 545px) {
        padding: 5rem 0;
    }
`;
