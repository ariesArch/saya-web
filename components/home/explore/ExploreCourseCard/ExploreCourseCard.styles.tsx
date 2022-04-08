import { css } from "@emotion/react";

export const courseCard = css`
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
`;

export const imageContainer = css`
    width: 100%;
    /* css hack to make height relative to with*/
    padding-bottom: 56.25%;
    position: relative;

    margin-bottom: 1rem;
    border-radius: 1rem;

    img {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover;
        border-radius: 1rem;
    }
`;

export const courseName = css`
    font-size: 1.8rem;
    font-weight: 600;
`;

export const subTexts = css`
    display: flex;
    align-items: center;
    font-size: 1.4rem;

    svg {
        width: 2rem;
        height: auto;
        margin-right: 0.5rem;
    }
`;
