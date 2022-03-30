import { css } from "@emotion/react";

export const topBar = (isFloating: boolean, isHidden: boolean) => css`
    width: 100%;
    padding: 3rem 5rem 1rem;
    display: flex;
    align-items: flex-end;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    z-index: 100;
    transition: all 0.4s;

    ${isHidden &&
    `
    transform: translateY(-20rem);
  `}

    ${isFloating &&
    `
    position: fixed;
    background-color: #fff;
    box-shadow: 0 .3rem .6rem rgba(0, 0, 0, .1);
    transform: translateY(0);
  `}
`;

export const logoContainer = css`
    width: 20rem;

    img {
        width: 100%;
    }
`;

export const nav = css`
    display: flex;
    align-items: center;
    margin-left: 8rem;
`;

export const navItem = (isSelected: boolean) => css`
    font-size: 2rem;
    font-weight: 500;
    padding: 0.5rem 1rem 2rem;
    position: relative;
    white-space: nowrap;
    transition: all 0.4s;

    ${isSelected && `color: var(--color-primary);`}

    &:not(:last-child) {
        margin-right: 3rem;
    }
`;

export const underline = css`
    position: absolute;
    left: 1.2rem;
    bottom: 1rem;
    width: calc(100% - 2rem);
    height: 0.5rem;
    background-color: var(--color-primary);
`;
