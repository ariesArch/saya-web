import { css } from "@emotion/react";

import { clickEffect } from "@/components/common/commonStyles";

export const wrapper = css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.33);
    z-index: 100000;
`;

export const container = css`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 38rem;
    background-color: #fff;
    padding: 1rem 2rem;
`;

export const header = css`
    display: flex;
    flex-direction: column;
`;

export const heading = css`
    font-size: 4rem;
`;

export const subHeading = css`
    font-size: 1.6rem;
`;

export const progressIndicator = css`
    display: flex;
    align-items: center;
    margin: 1.5rem 0;

    span {
        font-size: 2rem;
        color: var(--color-primary);
        font-weight: 600;
        margin-right: 1rem;
    }
`;

export const progressContainer = css`
    display: flex;
    align-items: center;
`;

export const progressItem = (isActive: boolean) => css`
    width: 2.5rem;
    height: 0.4rem;
    border-radius: 0.6rem;
    background-color: #eee;
    transition: all 0.2s;

    &:not(:last-child) {
        margin-right: 0.4rem;
    }

    ${isActive &&
    `
       background-color: var(--color-primary);
`};
`;

export const body = css`
    display: flex;
    flex-direction: column;
`;

export const buttonContainer = css`
    display: flex;
    justify-content: center;
    position: relative;
    margin-top: 1rem;

    button {
        padding: 0.5rem 3.5rem;
    }
`;

export const backBtn = css`
    position: absolute;
    left: 0;
    padding: 0.5rem !important;
    width: 3rem;
    height: 3rem;
    background-color: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 50%;
    display: flex;
    align-items: center;
    ${clickEffect};

    &:hover {
        background-color: #f9f9f9;
    }

    svg {
        width: 2.5rem;
        height: auto;
    }
`;

export const tip = css`
    text-align: center;
    margin-top: 1.5rem;

    a {
        text-decoration: underline;
    }
`;
