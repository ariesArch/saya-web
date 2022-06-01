import { css } from "@emotion/react";

export const container = css`
    display: flex;
    width: 100%;
    height: 100%;

    @media only screen and (max-width: 745px) {
        padding-left: 4rem;
    }

    @media only screen and (max-width: 695px) {
        padding-left: 0;
    }
`;

export const list = css`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    width: 100%;
`;

export const emptyMessageContainer = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
`;
