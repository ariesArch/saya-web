import { css } from "@emotion/react";

export const headerNav = css`
    display: flex;
    width: 100%;
    border-bottom: 1px solid #f5f5f5;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 50;
    background-color: #fff;
    padding-left: 8rem;
    flex-shrink: 0;

    @media only screen and (max-width: 695px) {
        padding-left: 2rem;
    }
`;

export const navItem = (isSingle?: boolean) => css`
    position: relative;
    font-size: 4.5rem;
    font-weight: 700;
    padding-top: 1rem;
    padding-bottom: 1rem;
    ${!isSingle && "cursor: pointer;"};

    @media only screen and (max-width: 495px) {
        font-size: 4rem;
    }

    &:not(:last-child) {
        margin-right: 4rem;
    }

    ${isSingle &&
    `
      color: var(--color-primary);

  `};
`;

export const underline = css`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 3rem;
    height: 0.8rem;
    background-color: var(--color-primary);
`;
