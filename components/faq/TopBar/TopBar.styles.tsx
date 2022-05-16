import { css } from "@emotion/react";

export const topBar = (isFloating: boolean, isHidden: boolean) => css`
    width: 100%;
    padding: 3rem 5rem 1rem;
    display: flex;
    align-items: flex-end;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fffcf8;
    z-index: 100;
    transition: all 0.4s;

    @media only screen and (max-width: 992px) {
        padding: 3rem 3rem 1rem;
    }

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
        padding-top: 1rem !important;
  `}
`;

export const logoContainer = css`
    width: 20rem;
    cursor: pointer;

    @media only screen and (max-width: 695px) {
        width: 25rem;
    }

    @media only screen and (max-width: 545px) {
        width: 20rem;
    }

    img {
        width: 100%;
    }
`;

export const nav = css`
    display: flex;
    align-items: center;
    margin-left: 8rem;

    @media only screen and (max-width: 992px) {
        margin-left: auto;
    }

    @media only screen and (max-width: 695px) {
    }
`;

export const navItem = (isSelected: boolean) => css`
    font-size: 2rem;
    font-weight: 500;
    padding: 0.5rem 1rem 2rem;
    position: relative;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.4s;

    ${isSelected && `color: var(--color-primary);`}

    &:not(:last-child) {
        margin-right: 3rem;

        @media only screen and (max-width: 992px) {
            margin-right: 1.5rem;
        }

        @media only screen and (max-width: 900px) {
            margin-right: 2.5rem;
        }
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
