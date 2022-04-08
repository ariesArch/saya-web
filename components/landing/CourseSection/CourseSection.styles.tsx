import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    margin-top: 10rem;
`;

export const aboutCourse = css`
    display: flex;
`;

export const aboutSchedule = css`
    display: flex;
    align-items: center;
`;

export const illuContainer = css`
    width: 55%;
    padding-top: 4rem;

    svg {
        width: 100%;
        height: auto;
    }
`;

export const contents = css`
    width: 45%;
    display: flex;
    flex-direction: column;
    padding: 0 3rem 0 5rem;
`;

export const textSection = css`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: 4rem;
    }
`;

export const heading = css`
    font-weight: 700;
    font-size: 6rem;
    color: var(--font-color-dark);
`;

export const subHeading = css`
    font-size: 2.5rem;
    font-weight: 500;
`;
