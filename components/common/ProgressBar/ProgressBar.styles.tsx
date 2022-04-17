import { css } from "@emotion/react";

export const progressBar = (progress: number, color: "violet" | "blue" | "white") => css`
    width: 100%;
    height: 0.5rem;
    border-radius: 0.25rem;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        left: 0;
        width: ${progress}%;
        height: 100%;
        border-radius: 0.25rem;
    }

    ${color === "violet" &&
    `
        background-color: rgba(140, 116, 251, 0.15);
        
        &::after {
            background-color: var(--color-violet);
        }
    `};

    ${color === "blue" &&
    `
        background-color: rgba(60, 118, 235, 0.15);
        
        &::after {
            background-color: var(--color-blue);
        }
    `};

    ${color === "white" &&
    `
        background-color: rgba(255, 255, 255, 0.15);
        
        &::after {
            background-color: #fff;
        }
    `};
`;
