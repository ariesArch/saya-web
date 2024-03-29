import { css } from "@emotion/react";

import { clickEffect, timeKeeperStyles } from "@/components/common/commonStyles";

export const modal = (isOpen: boolean) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 1000000;
    display: ${isOpen ? "flex" : "none"};
    justify-content: center;
    align-items: center;
`;

export const backdrop = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000001;
`;

export const contents = css`
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.14);
    background-color: #fff;
    border-radius: 1.4rem;
    width: fit-content;
    padding: 1.5rem 2rem;
    display: flex;
    flex-direction: column;
    z-index: 1000002;

    ${timeKeeperStyles};
`;

export const title = css`
    font-size: 1.3rem;
    color: #3b3b3b;
    text-align: center;
    text-transform: uppercase;
`;

export const duration = css`
    display: flex;
    flex-direction: column;
`;

export const durationLabel = css`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
`;

export const durationInputContainer = css`
    background-color: #f6f6f6;
    padding: 0.7rem 1rem;
    border-radius: 7px;
    display: flex;
    justify-content: space-between;
    font-size: 1.6rem;
    cursor: pointer;
`;

export const durationChange = css`
    font-size: 1.5rem;
    color: var(--color-green-light);
    text-decoration: underline;
`;

export const footer = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
`;

export const buttonsContainer = css`
    display: flex;
    align-items: center;
`;

export const deleteBtn = css`
    ${clickEffect};
`;

export const button = (isSet: boolean, isDisabled = false) => css`
    font-size: 1.5rem;
    font-weight: 500;
    color: #5b5b5b;
    transition: all 0.2s;

    &:active {
        opacity: 0.6;
    }

    ${isSet &&
    `
        color: var(--color-green-light);
        font-size: 1.7rem;
    `};

    ${isDisabled &&
    `
        color: inherit;
        opacity: 0.8;
        cursor: auto;
    `};

    &:not(:last-of-type) {
        margin-right: 1.5rem;
    }
`;

export const popupContainer = css`
    display: flex;
    flex-direction: column;
    max-height: 10rem;
    overflow: auto;
`;

export const popupItem = css`
    padding: 0.5rem 1rem;
    font-size: 1.6rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background-color: #f6f6f6;
    }
`;
