import { css } from "@emotion/react";

export const container = css`
    display: flex;
    padding: 5rem 0;
    margin-top: 10rem;

    @media only screen and (max-width: 695px) {
        flex-direction: column-reverse;
        margin-top: 3rem;
    }
`;

export const illuContainer = css`
    width: 55%;
    padding-left: 8rem;
    padding-top: 4rem;

    @media only screen and (max-width: 992px) {
        padding-left: 3rem;
    }

    @media only screen and (max-width: 695px) {
        width: 100%;
        padding: 0 1.5rem;
    }

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

    @media only screen and (max-width: 992px) {
        padding-right: 3rem;
    }

    @media only screen and (max-width: 695px) {
        width: 100%;
        padding: 0 6rem;
        margin-bottom: 4rem;
    }

    @media only screen and (max-width: 545px) {
        width: 100%;
        padding: 0 3rem;
    }
`;

export const heading = css`
    font-weight: 700;
    font-size: 6rem;
    color: var(--font-color-dark);

    @media only screen and (max-width: 1245px) {
        font-size: 5rem;
    }

    @media only screen and (max-width: 478px) {
        font-size: 4rem;
    }
`;

export const subHeading = css`
    font-size: 2.5rem;
    font-weight: 500;

    @media only screen and (max-width: 1245px) {
        font-size: 2rem;
    }
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

        @media only screen and (max-width: 1245px) {
            width: 5rem !important;
            height: 5rem !important;
        }
    }

    &:not(:last-child) {
        margin-right: 1rem;
    }
`;

export const teacherName = css`
    margin-top: 1rem;

    @media only screen and (max-width: 1245px) {
        margin-top: 0.5rem;
    }
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
    @media only screen and (max-width: 1245px) {
        font-size: 2.2rem;

        span {
            font-size: 1.6rem;
        }
    }
`;
