import { css } from "@emotion/react";

export const container = css`
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    background-color: #fff;
    box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
`;

export const imageContainer = css`
    width: 13rem;
    height: 18rem;
    position: relative;
    flex-shrink: 0;

    img {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover;
        border-radius: 1rem;
    }
`;

export const classInfo = css`
    display: flex;
    flex-direction: column;
    padding: 1rem 1.5rem;
`;

export const date = (isNotify: boolean) => css`
    font-size: 1.4rem;
    font-weight: 600;
    padding: 0.5rem 1.5rem;
    border-radius: 4rem;
    background-color: #fafafa;
    border: 0.5px solid #ebebeb;
    width: fit-content;
    display: flex;
    align-items: center;

    ${isNotify && `color: var(--color-green);`};

    svg {
        width: 1.6rem;
        height: auto;
        margin-right: 0.5rem;
    }
`;

export const mainTexts = css`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    padding-bottom: 1rem;
    border-bottom: 1px solid #eee;
`;

export const title = css`
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 0.2rem;
`;

export const subtitles = css`
    display: flex;
    align-items: center;

    svg {
        width: 1.6rem;
        height: auto;
        color: var(--color-primary);
        margin-right: 0.5rem;
    }
`;

export const syllabus = css`
    display: flex;
    flex-direction: column;
`;

export const syllabusTitle = css`
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
`;

export const syllabusText = css``;

export const buttonContainer = css`
    display: flex;
    align-items: center;
    margin-top: 1.5rem;

    svg {
        width: 3rem;
        height: auto;
        margin-right: 1rem;
    }

    button {
        svg {
            width: 2rem;
            height: auto;
            margin-right: 0.5rem;
        }
    }
`;
