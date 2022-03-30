import { css } from "@emotion/react";

export const container = css`
    display: flex;
    padding: 5rem 0;
    margin-top: 10rem;
`;

export const illuContainer = css`
    width: 55%;
    padding-left: 8rem;
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
    padding-right: 5rem;
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

export const teachers = css`
    display: flex;
    align-items: center;
    margin-top: 4rem;
`;

export const avatars = css`
    display: flex;
`;

export const avatarContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 6rem !important;
        height: 6rem !important;
        border-radius: 50%;
        object-fit: cover;
    }

    &:not(:last-child) {
        margin-right: 1rem;
    }
`;

export const teacherName = css`
    margin-top: 1rem;
`;

export const teacherTotalLeft = css`
    font-size: 2.5rem;
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    line-height: 2.5rem;

    span {
        font-size: 1.8rem;
    }
`;
