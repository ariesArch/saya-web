import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 8%;
    z-index: 2;

    @media only screen and (max-width: 1325px) {
        padding: 0;
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

export const checkBtn = css`
    align-self: center;
    background-color: #222;
    border-radius: 0.8rem;
    border-color: #222;
    padding: 1rem 2rem;

    &:hover {
        background-color: #272727;
        border-color: #444;
    }
`;

export const spinnerOverlay = css`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 5;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;
