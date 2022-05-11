import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 2rem;

    @media only screen and (max-width: 1175px) {
        padding-left: 0;
    }
`;

export const header = css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 1175px) {
        flex-direction: column;
    }
`;

export const heading = css`
    font-size: 3.5rem;

    @media only screen and (max-width: 1175px) {
        margin-bottom: 2rem;
    }
`;

export const body = css``;
