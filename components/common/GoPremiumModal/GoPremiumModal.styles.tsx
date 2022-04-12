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

export const modalContents = css``;
