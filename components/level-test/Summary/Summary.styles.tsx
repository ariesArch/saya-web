import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5rem;
`;

export const congrats = css`
    font-size: 8rem;
    font-family: FreeStyle-Script, sans-serif;
    margin: 5rem 0 0;
`;

export const levelBadge = css``;

export const text = css`
    font-size: 2.5rem;
    font-weight: 500;
`;

export const buttonsContainer = css`
    display: flex;
    align-items: center;
`;

export const link = css`
    color: #fff;
    font-size: 2.1rem;
    font-weight: 500;
    text-decoration: underline;
    margin-top: 5rem;
    cursor: pointer;
    transition: all 0.2s;

    &:active {
        opacity: 0.9;
    }

    &:not(:last-child) {
        margin-right: 4rem;
    }
`;
