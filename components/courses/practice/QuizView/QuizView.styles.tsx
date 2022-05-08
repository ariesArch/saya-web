import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 12%;
    z-index: 2;
`;

export const header = css`
    display: flex;
    justify-content: center;
    margin-bottom: 5rem;

    svg {
        width: 3rem;
        height: auto;
        margin-right: 0.5rem;
    }
`;

export const contents = css`
    display: flex;
    flex-direction: column;
    padding: 0 6rem;
`;
