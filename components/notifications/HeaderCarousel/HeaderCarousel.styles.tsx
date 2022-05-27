import { css } from "@emotion/react";

export const container = css`
    width: 100%;
    position: relative;
`;

export const imageContainer = css`
    width: 100%;
    height: 20rem;
    display: flex;
    justify-content: center;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media only screen and (max-width: 1245px) {
        height: auto;
    }
`;

export const pagination = css`
    display: flex;
    align-items: center;

    position: absolute;
    bottom: 1rem;
    left: 50%;
    z-index: 5;
    transform: translateX(-50%);
`;

export const dot = (isActive: boolean) => css`
    width: 1rem;
    height: 1rem;
    background-color: ${isActive ? "#6a6a6a" : "#f2f2f2"};
    border-radius: 0.3rem;
    transition: all 0.2s;

    &:not(:last-child) {
        margin-right: 0.5rem;
    }
`;
