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

export const progressContainer = css`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
`;

export const progressText = css`
    font-size: 1.5rem;
    white-space: nowrap;
    margin-right: 0.5rem;
    color: var(--color-violet-light);
`;

export const courseName = css`
    font-size: 1.8rem;
    font-weight: 600;
`;
