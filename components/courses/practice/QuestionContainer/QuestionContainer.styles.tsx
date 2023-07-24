import { css } from "@emotion/react";

export const questionContainer = (questionType: string) => css`
    padding: 2rem 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    ${questionType === "true-false-old-code" &&
    `
         padding: 7rem 6rem;
         background-color: #fff;
         border-radius: 1.4rem;
         color: #444;
         
         @media only screen and (max-width: 1095px) {
              padding: 10rem 3rem;
        }
    `};
`;

// export const questionText = css`
//     font-size: 2.5rem;
//     font-weight: 600;
//     transition: all 0.4s;
// `;
