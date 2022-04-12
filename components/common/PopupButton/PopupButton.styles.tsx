import { css } from "@emotion/react";

export const popupContainer = css`
    position: relative;
`;

export const contents = (
    open: boolean,
    position: string,
    horizontalOffset: number,
    verticalOffset: number
) => css`
    position: absolute;
    z-index: 10000;
    border: 1px solid #e5e5e5;
    background-color: #fff;
    border-radius: 1rem;
    min-width: 20rem;
    width: fit-content;
    height: fit-content;
    box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.1);
    overflow: hidden;

    ${!open &&
    `
        display: none;
    `}

    ${position === "top" &&
    `
        top: auto;
        bottom: calc(100% + 1rem + ${verticalOffset}px);
        left: calc(0px + ${horizontalOffset}px;
        right: 0;)
    `}
  
    ${position === "bottom" &&
    `
        top: calc(100% + 1rem + ${verticalOffset}px);
        bottom: auto;
        left: calc(0px + ${horizontalOffset}px);
        right: 0;
    `}
  
    ${position === "left" &&
    `
        top: calc(0px + ${verticalOffset}px);
        bottom: 0;
        left: auto;
        right: calc(100% + 1rem + ${horizontalOffset}px);
    `}
  
    ${position === "right" &&
    `
        top: calc(0px + ${verticalOffset}px);
        bottom: 0;
        left: calc(100% + 1rem + ${horizontalOffset}px);
        right: auto;
    `}
`;
