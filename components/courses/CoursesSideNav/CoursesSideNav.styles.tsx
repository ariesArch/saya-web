import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
`;

export const scrollContainer = css`
    max-height: calc(100vh - 18rem);
    padding: 1rem 0.5rem 1rem;
    margin-top: 1.5rem;
`;

export const sections = css`
    display: flex;
    flex-direction: column;
`;

export const title = css`
    font-size: 1.8rem;
    font-weight: 600;
`;

export const materials = css`
    display: flex;
    flex-direction: column;
    border-radius: 1.4rem;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.14);
    position: relative;
`;

export const chapterInfo = css`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    background-color: #fff;
    padding: 0.5rem 0.8rem;
    border-top-right-radius: 1.4rem;
    border-top-left-radius: 1.4rem;

    position: sticky;
    top: 0;
    left: 1rem;
    z-index: 5;
`;

export const backBtn = css`
    color: #444;
    background-color: #f9f9f9;
    align-self: flex-start;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    font-weight: 600;

    svg {
        width: 0.5rem;
        height: auto;
        margin-right: 0.5rem;
    }
`;

export const materialSectionCard = css`
    cursor: auto;
    box-shadow: none;
    border-radius: unset;
    padding: 0;

    &:hover {
        background-color: #fff;
    }
`;
