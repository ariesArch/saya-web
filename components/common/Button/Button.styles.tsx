import { css } from "@emotion/react";

import { ButtonColor, ButtonVariant } from "@/interfaces/common.interface";

export const defaultStyles = (color: ButtonColor) => css`
    background-color: #fff;
    border: 1px solid #f5f5f5;

    ${color === "primary" &&
    `
        color: var(--color-primary);
        
        &:hover {
            border-color: var(--color-primary);
        }
    `};

    ${color === "default" &&
    `
        color: var(--color-blue);
        
        &:hover {
            border-color: var(--color-blue);
        }
    `};

    ${color === "success" &&
    `
        color: var(--color-green);
        
        &:hover {
            border-color: var(--color-green);
        }
    `};

    ${color === "rank" &&
    `
        color: var(--color-violet-light);
        
        &:hover {
            border-color: var(--color-violet-light);
        }
    `};

    ${color === "course" &&
    `
        color: var(--color-violet);
        
        &:hover {
            border-color: var(--color-violet);
        }
    `};
`;

export const containedStyles = (color: ButtonColor) => css`
    color: #fff;
    border: 1px solid;

    ${color === "primary" &&
    `
        background-color: var(--color-primary);
        border-color: var(--color-primary-button-hover);
        
        &:hover {
            background-color: var(--color-primary-button-hover);
        }
    `};

    ${color === "default" &&
    `
        background-color: var(--color-blue);
        border-color: var(--color-blue-button-hover);
        
        &:hover {
            background-color: var(--color-blue-button-hover);
        }
    `};

    ${color === "success" &&
    `
        background-color: var(--color-green);
         border-color: var(--color-green-button-hover);
        
        &:hover {
            background-color: var(--color-green-button-hover);
        }
    `};

    ${color === "rank" &&
    `
        background-color: var(--color-violet-light);
         border-color: var(--color-violet-light-button-hover);
        
        &:hover {
            background-color: var(--color-violet-light-button-hover);
        }
    `};

    ${color === "course" &&
    `
        background-color: var(--color-violet);
         border-color: var(--color-violet-button-hover);
        
        &:hover {
            background-color: var(--color-violet-button-hover);
        }
    `};
`;

export const button = (color: ButtonColor, variant: ButtonVariant, loading: boolean) => css`
    font-size: 1.6rem;
    font-weight: 500;
    padding: 0.6rem 2rem;
    border-radius: 2.5rem;
    transition: all 0.4s;

    &:active {
        transform: scale(0.9);
    }

    ${loading &&
    `
          background-color: #f5f5f5 !important;
          border: 1px solid #eaeaea !important;
          color: #555555 !important;
          cursor: not-allowed !important;
          pointer-events: auto !important;
    `};

    ${variant === "default" ? defaultStyles(color) : containedStyles(color)}
`;
