import { css } from "@emotion/react";

export const container = css`
    display: flex;
    padding: 5rem 0;
`;

export const contents = css`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`;

export const textsContainer = css`
    display: flex;
    flex-direction: column;
    margin-bottom: 5rem;
    padding: 1rem 1rem 1rem 5rem;
`;

export const headingContainer = css`
    position: relative;
    width: fit-content;
`;

export const heading = css`
    font-weight: 700;
    font-size: 6rem;
    color: var(--font-color-dark);
`;

export const headingTips = css`
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 100%;
    right: 0;
`;

export const headingTooltip = css`
    font-weight: 400;
    font-size: 2.3rem;
    color: #fff;
    background-color: var(--color-primary);
    border-radius: 1.2rem 1.2rem 1.2rem 0;
    padding: 0 0.8rem;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        top: 54%;
        left: -1.2rem;
        border-width: 1.2rem;
        border-style: solid;
        border-color: var(--color-primary) transparent transparent transparent;
        transform: rotate(-222deg);
    }
`;

export const additionalTip = css`
    font-size: 2.5rem;
    font-family: Mistral, serif;
    margin-left: 1rem;
    font-weight: 300;
    color: var(--color-primary);
`;

export const subHeading = css`
    font-size: 2.5rem;
    font-weight: 500;
`;

export const illuContainer = css`
    width: 100%;

    svg {
        width: 100%;
        height: auto;
    }
`;

export const loginContainer = css`
    flex-basis: 58rem;
    align-self: flex-start;
    background-color: var(--color-primary);
    border-radius: 2rem;
    transform: skewY(-10deg);
    padding: 7rem 2.5rem;
    margin: 0 5rem 0 4rem;
`;

export const login = css`
    transform: skewY(10deg);
`;

export const loginHeading = css`
    color: #fff;
    font-weight: 700;
    font-size: 4rem;
`;

export const downloadLinksContainer = css`
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
`;

export const downloadHeading = css`
    display: inline-block;
    color: #fff;
    margin-bottom: 1rem;
    font-size: 1.8rem;
    font-weight: 500;
`;

export const downloadLinks = css`
    display: flex;
    flex-wrap: wrap;

    a {
        width: 15rem;

        img {
            width: 100%;
        }
        &:not(:last-child) {
            margin-right: 1rem;
            margin-bottom: 1rem;
        }
    }
`;
