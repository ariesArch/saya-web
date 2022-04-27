import { css } from "@emotion/react";

export const footer = css`
    width: 100%;
    padding: 0 2rem 2rem;
    margin-top: -5rem;
`;

export const container = css`
    padding: 3rem 8rem 2rem;
    color: #fff;
    display: flex;
    justify-content: space-between;
    position: relative;

    @media only screen and (max-width: 1245px) {
        padding: 3rem 5rem 2rem;
    }

    @media only screen and (max-width: 645px) {
        flex-direction: column;
        justify-content: unset;
    }
`;

export const bgContainer = css`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;

    svg {
        width: 100%;
        height: 100%;
    }
`;

export const logoContainer = css`
    display: flex;
    align-items: center;
    align-self: center;
    z-index: 2;

    @media only screen and (max-width: 645px) {
        align-self: unset;
    }

    svg {
        width: 5rem;
        height: auto;
        color: #fff;
    }
`;

export const logoTexts = css`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
`;

export const logoHeading = css`
    font-size: 3.5rem;
    line-height: 3rem;
    font-weight: 700;

    @media only screen and (max-width: 1375px) {
        font-size: 3rem;
    }
`;

export const logoSubHeading = css`
    font-size: 1.6rem;
    font-weight: 300;

    @media only screen and (max-width: 1375px) {
        font-size: 1.5rem;
    }
`;

export const contents = css`
    display: flex;
    flex-direction: column;
    margin-left: 4rem;
    z-index: 2;

    @media only screen and (max-width: 992px) {
        display: none;
    }
`;

export const text = css`
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 0.5rem;

    @media only screen and (max-width: 1375px) {
        font-size: 3rem;
    }
`;

export const button = css`
    align-self: flex-start;
`;

export const contactsContainer = css`
    margin-left: 4rem;
    display: flex;
    flex-direction: column;
    z-index: 2;
`;

export const aboutFounders = css`
    display: flex;

    @media only screen and (max-width: 645px) {
        display: none;
    }
`;

export const contactItem = css`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-right: 2rem;
    }
`;

export const contactHeading = css`
    font-size: 2.2rem;
    font-weight: 300;

    @media only screen and (max-width: 1375px) {
        font-size: 2rem;
    }
`;

export const contactText = css`
    font-size: 1.6rem;
    font-weight: 300;

    @media only screen and (max-width: 1375px) {
        font-size: 1.5rem;
    }

    &:not(:last-child) {
        margin-bottom: 0.3rem;
    }
`;

export const socialLinks = css`
    display: flex;
    align-items: center;
`;

export const socialLink = css`
    margin-top: 1.5rem;

    &:not(:last-child) {
        margin-right: 2rem;
    }

    img {
        height: 2rem !important;
        width: auto;
    }
`;
