import { css } from "@emotion/react";

import { RadioColor } from "@/interfaces/common.interfaces";

export const label = css`
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
`;

export const input = (color: RadioColor, isLabel: boolean, size = "2.3rem", showRadio: boolean) => css`
    &[type="radio"] {
        /* Add if not using autoprefixer */
        appearance: none;
        /* For iOS < 15 to remove gradient background */
        background-color: #fff;

        margin: 0;

        ${showRadio &&
        `
            font: inherit;
            color: currentColor;
            cursor: pointer;
            width: ${size};
            height: ${size};
            border: 2px solid #eee;
            border-radius: 50%;
            display: grid;
            place-content: center;
            flex-shrink: 0;
            transition: all 0.2s;
    
            ${isLabel && `margin-right: .5rem;`};
    
            &::before {
                content: "";
                width: calc(${size} * 0.4);
                height: calc(${size} * 0.4);
                border-radius: 50%;
                transform: scale(0);
                transition: 120ms transform ease-in-out;
    
                ${
                    color === "primary" &&
                    `
                    background-color: var(--color-primary);
                `
                }
    
                ${
                    color === "course" &&
                    `
                    background-color: var(--color-violet);
                `
                }
            }
    
            &:hover {
                border-color: #eee;
            }
    
            &:checked {
                &::before {
                    transform: scale(1);
                }
            }
        `}
    }
`;
