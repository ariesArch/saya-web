import { css } from "@emotion/react";

export const rankItem = (isSelected: boolean) => css`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0.5rem 1rem;

    ${isSelected &&
    `
      background-color: var(--color-background-gray); 
      border-radius: 1rem;
      border: .5px solid #d8d8d8;
    `};
`;

export const rankNumber = css`
    font-size: 1.6rem;
    font-weight: 600;
    min-width: 2rem;
    text-align: right;
`;

export const avatarContainer = css`
    margin: 0 1rem;
`;

export const status = css`
    width: 2rem;
    margin-right: 0.5rem;

    svg {
        width: 100%;
        height: auto;
        color: var(--color-green);
    }
`;

export const name = css`
    font-size: 1.6rem;
    font-weight: 400;
    text-transform: uppercase;
`;

export const nameContainer = css`
    flex-grow: 1;
    display: flex;
    align-items: center;
    margin-right: 1rem;
`;

export const badge = css`
    width: 2rem;
    margin-left: 0.5rem;

    svg {
        width: 100%;
        height: auto;
    }
`;

export const score = css`
    display: flex;
    align-items: center;
    justify-self: flex-end;

    svg {
        width: 1.5rem;
        height: auto;
        color: var(--color-gold);
        margin-right: 0.5rem;
        margin-top: -0.2rem;
    }
`;

export const scoreNumber = css`
    font-size: 1.6rem;
    font-weight: 600;
`;
