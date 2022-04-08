import { css } from "@emotion/react";

export const rankTable = css`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 1rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.14);
    padding-bottom: 2rem;
`;

export const header = css`
    display: flex;
    border-bottom: 1px solid #f5f5f5;
    padding: 0 1.5rem;
`;

export const navItem = css`
    padding-bottom: 0.7rem;
    padding-top: 1rem;
    position: relative;
    font-size: 2.2rem;
    font-weight: 600;

    &:not(:last-child) {
        margin-right: 2.5rem;
    }
`;

export const underline = css`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 95%;
    height: 0.4rem;
    background-color: var(--color-violet-light);
`;

export const body = css`
    padding: 1rem 0.5rem 0;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: auto;
    max-height: calc(100vh - 24rem);
`;

export const rankItem = css`
    &:not(:last-child) {
        margin-bottom: 0.5rem;
    }
`;
