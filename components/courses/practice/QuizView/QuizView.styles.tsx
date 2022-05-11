import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 12%;
    z-index: 2;

    @media only screen and (max-width: 1325px) {
        padding: 0;
    }
`;

export const header = css`
    display: flex;
    justify-content: center;
    margin-bottom: 5rem;

    svg {
        width: 1.8rem;
        height: auto;
        margin-right: 0.8rem;

        @media only screen and (max-width: 695px) {
            display: none;
        }
    }
`;

export const contents = css`
    display: flex;
    flex-direction: column;
    padding: 0 6rem;

    @media only screen and (max-width: 1095px) {
        padding: 0 2rem;
    }

    @media only screen and (max-width: 445px) {
        padding: 0;
    }
`;
