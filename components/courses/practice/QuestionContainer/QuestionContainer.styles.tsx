import { css } from "@emotion/react";

export const questionContainer = (isTrueFalse: boolean) => css`
    padding: 2rem 0;
    text-align: center;

    ${isTrueFalse &&
    `
         padding: 7rem 6rem;
         background-color: #fff;
         border-radius: 1.4rem;
         color: #444;
    `};
`;

export const speakerContainer = css`
    padding: 2rem 0;

    svg {
        width: 8rem;
        height: auto;
    }
`;

export const questionText = css`
    font-size: 2.5rem;
    font-weight: 600;
`;
