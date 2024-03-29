import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
`;

export const scrollContainer = css`
    padding: 0 0.5rem;
`;

export const sections = css`
    display: flex;
    flex-direction: column;
    max-height: calc(100vh - 22rem);
    padding: 0.5rem 0.5rem 1rem;
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
    max-height: calc(100vh - 18rem);

    & > div {
        margin: 0;
    }
`;

export const chapterInfo = css`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    background-color: #fff;
    padding: 0.8rem 1.2rem;
    border-top-right-radius: 1.4rem;
    border-top-left-radius: 1.4rem;

    position: sticky;
    top: -1px;
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

    @media only screen and (max-width: 695px) {
        font-size: 2.5rem;

        svg {
            width: 0.8rem;
            margin-right: 0.8rem;
        }
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
