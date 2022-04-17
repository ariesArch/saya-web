import { css } from "@emotion/react";

import { clickEffect } from "@/components/common/commonStyles";

export const card = (isSelectedCourse: boolean) => css`
    display: flex;
    flex-direction: column;
    color: #fff;
    border-radius: 1.4rem;
    padding: 1.5rem 1.5rem 1.2rem;
    margin: 0 0.5rem;
    background-color: #fff;

    ${isSelectedCourse &&
    `
       background-color: var(--color-violet);
   `}
`;

export const mainContents = css`
    display: flex;
    justify-content: space-between;
`;

export const textsContainer = css`
    display: flex;
    flex-direction: column;
`;

export const title = css`
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
    min-height: 2rem;
`;

export const info = css`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 2rem;

    svg {
        width: 1.6rem;
        height: auto;
        margin-right: 0.5rem;
        flex-shrink: 0;
        color: #fff;
    }
`;

export const button = css`
    background-color: rgba(255, 255, 255, 0.3);
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0.6rem 1.5rem;
    font-size: 1.5rem;
    font-weight: 500;
    align-self: flex-start;
    border-radius: 2rem;
    border: 1px solid #fff;
    ${clickEffect};

    svg {
        width: 1.5rem;
        height: auto;
        margin-right: 0.5rem;
    }
`;

export const progressContainer = css`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    color: #fff;

    span {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }
`;
