import { css } from "@emotion/react";

export const container = css`
    display: flex;
    align-items: center;
`;

export const label = css`
    font-size: 2rem;
    font-weight: 600;

    @media only screen and (max-width: 425px) {
        display: none;
    }
`;

export const progressContainer = css`
    display: flex;
    align-items: center;
    margin-left: 1.5rem;
`;

export const progressItem = (isActive: boolean) => css`
    width: 3.5rem;
    height: 5px;
    background-color: ${isActive ? "#fff" : "rgba(0, 0, 0, 0.14)"};
    border-radius: 7px;
    transition: all 0.2s;

    &:not(:last-child) {
        margin-right: 0.8rem;
    }

    @media only screen and (max-width: 1095px) {
        width: 3rem;

        &:not(:last-child) {
            margin-right: 0.4rem;
        }
    }
`;
