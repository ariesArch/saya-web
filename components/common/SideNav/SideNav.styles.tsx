import { css } from "@emotion/react";

export const sideNav = css`
    display: flex;
    flex-direction: column;
    padding: 10rem 1rem 0;
    border-right: 1px solid #f5f5f5;
    width: fit-content;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 1000;
    background-color: #fff;

    @media only screen and (max-width: 695px) {
        bottom: 0;
        top: unset;
        right: 0;
        flex-direction: row;
        height: auto;
        width: 100%;
        padding-top: 1rem;
        padding-bottom: 1rem;
        justify-content: center;
        align-items: flex-end;
    }
`;

export const navItem = css`
    display: flex;
    flex-direction: column;
    align-items: center;

    &:not(:last-child) {
        margin-bottom: 2rem;

        @media only screen and (max-width: 695px) {
            margin-bottom: 0;
            margin-right: 4rem;
        }
    }
`;

export const navButton = css`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

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

export const avatarContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const label = (isActive: boolean) => css`
    font-size: 1.2rem;
    margin-top: 0.4rem;
    font-weight: 600;
    transition: all .2s;
  
    ${isActive && `color: var(--color-primary);`}};
`;
