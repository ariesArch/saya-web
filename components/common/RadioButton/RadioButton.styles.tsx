import { css } from "@emotion/react";

import { RadioColor } from "@/interfaces/common.interfaces";

export const label = css`
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
`;

export const input = (color: RadioColor, isLabel: boolean) => css`
    &[type="radio"] {
        /* Add if not using autoprefixer */
        appearance: none;
        /* For iOS < 15 to remove gradient background */
        background-color: #fff;

        margin: 0;

        font: inherit;
        color: currentColor;
        cursor: pointer;
        width: 2.3rem;
        height: 2.3rem;
        border: 2px solid #f5f5f5;
        border-radius: 50%;
        display: grid;
        place-content: center;
        transition: all 0.2s;

        ${isLabel && `margin-right: .5rem;`};

        &::before {
            content: "";
            width: 0.9rem;
            height: 0.9rem;
            border-radius: 50%;
            transform: scale(0);
            transition: 120ms transform ease-in-out;
            box-shadow: inset 1em 1em var(--color-primary);

            ${color === "primary" &&
            `
                box-shadow: inset 1em 1em var(--color-primary);
            `}

            ${color === "course" &&
            `
                box-shadow: inset 1em 1em var(--color-violet);
            `}
        }

        &:hover {
            border-color: #eee;
        }

        &:checked {
            &::before {
                transform: scale(1);
            }
        }
    }
`;
