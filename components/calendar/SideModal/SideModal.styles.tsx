import { css } from "@emotion/react";

export const modal = (isOpen: boolean) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 1000000;
    display: ${isOpen ? "flex" : "none"};
`;

export const backdrop = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000003;
`;

export const contents = css`
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1000004;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.14);
    background-color: #fff;
    border-top-left-radius: 1.4rem;
    border-bottom-left-radius: 1.4rem;
    width: fit-content;
    height: 100vh;
    padding: 1.5rem 2rem;
    display: flex;
    flex-direction: column;
`;
