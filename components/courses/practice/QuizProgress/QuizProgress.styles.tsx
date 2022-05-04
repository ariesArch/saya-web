import { css } from "@emotion/react";

export const container = css`
    display: flex;
    align-items: center;
`;

export const label = css`
    font-size: 2.5rem;
    font-weight: 600;
`;

export const progressContainer = css`
    display: flex;
    align-items: center;
    margin-left: 1.5rem;
`;

export const progressItem = (isActive: boolean) => css`
    width: 4rem;
    height: 5px;
    background-color: ${isActive ? "#fff" : "rgba(0, 0, 0, 0.14)"};
    border-radius: 7px;

    &:not(:last-child) {
        margin-right: 0.8rem;
    }
`;
