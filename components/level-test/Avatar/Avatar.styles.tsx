import { css } from "@emotion/react";

export const avatar = css`
    position: relative;
    width: fit-content;
    height: fit-content;
`;

export const imgContainer = (size = "", borderColor = "", hasBorder: boolean) => css`
    width: ${size || "6rem"};
    height: ${size || "6rem"};
    border: 2px solid transparent;
    background-color: ${borderColor || "var(--color-badge-gold)"};
    ${!hasBorder &&
    `
       border: none;
       background-color: #f5f5f5;
    `};
    border-radius: 50%;
    position: relative;
    overflow: hidden;

    & > span {
        background-color: #f5f5f5 !important;
    }

    img {
        border-radius: 50%;
        user-select: none;
    }
`;

export const badge = (size = "") => css`
    position: absolute;
    width: ${size ? `calc(${size} * 1.4)` : "3rem"};
    bottom: ${size ? `calc(-${size}/4)` : "-1.5rem"};
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;

    svg {
        width: 100%;
        height: auto;
    }
`;

export const confetti = css`
    position: absolute;
    width: 50rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -35%);
`;
