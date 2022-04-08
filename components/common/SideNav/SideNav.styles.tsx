import { css } from "@emotion/react";

export const sideNav = css`
    display: flex;
    flex-direction: column;
    padding: 10rem 1.5rem 0;
    border-right: 1px solid #f5f5f5;
    width: fit-content;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 100;
    background-color: #fff;
`;

export const navButton = css`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:not(:last-child) {
        margin-bottom: 2rem;
    }

    &:hover {
        color: inherit;
    }

    svg {
        width: 2.5rem;
        height: auto;
        color: inherit;
        transition: inherit;
    }
`;

export const avatarContainer = css``;
