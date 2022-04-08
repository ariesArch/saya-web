import { css } from "@emotion/react";

export const banner = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-image: url("/images/rank-bg.png");
    background-position: 50% 50%;
    background-size: cover;
    position: sticky;
    top: 1rem;
    left: 0;
    width: 100%;
    z-index: 2;
    padding: 1rem 2rem;
    border-radius: 1rem;
    margin-bottom: 2rem;
`;

export const bannerHeading = css`
    display: flex;
    align-items: center;
    font-size: 1.7rem;
    font-weight: 600;
    margin-bottom: 0.5rem;

    svg {
        width: 1.6rem;
        height: auto;
        margin-right: 0.5rem;
    }
`;

export const bannerTexts = css`
    font-size: 1.3rem;
    font-weight: 500;

    span {
        font-weight: 600;
    }
`;
