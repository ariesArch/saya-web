import { css } from "@emotion/react";

export const container = css`
    display: flex;
    align-items: center;
    padding: 2rem 0 2rem;
    position: relative;

    @media only screen and (max-width: 695px) {
        flex-direction: column-reverse;
        padding: 0;
    }
`;

export const illuContainer = css`
    width: 45%;

    @media only screen and (max-width: 1245px) {
        width: 40%;
    }

    @media only screen and (max-width: 695px) {
        width: 100%;
        padding: 0 6rem;
    }

    @media only screen and (max-width: 545px) {
        padding: 0 3rem;
    }

    @media only screen and (max-width: 478px) {
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
    padding: 0 3rem 0 5rem;

    @media only screen and (max-width: 1245px) {
        width: 50%;
    }

    @media only screen and (max-width: 992px) {
        padding: 0 3rem 0 3rem;
    }

    @media only screen and (max-width: 695px) {
        width: 100%;
        padding: 0 6rem;
    }

    @media only screen and (max-width: 545px) {
        padding: 0 3rem;
    }
`;

export const questionsContainer = css`
    padding-bottom: 4rem;

    @media only screen and (max-width: 695px) {
        padding-top: 2rem;
    }

    @media only screen and (max-width: 425px) {
        padding-top: 0;
    }
`;

export const item = css`
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
    border-top: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;

    @media only screen and (max-width: 695px) {
        padding: 1.5rem 1rem;
    }
`;

export const itemHeader = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`;

export const question = css`
    font-size: 2.5rem;
    color: #222;
    margin-right: 2rem;

    @media only screen and (max-width: 695px) {
        font-size: 2.2rem;
    }

    @media only screen and (max-width: 425px) {
        font-size: 1.8rem;
    }
`;

export const iconContainer = css`
    color: rgba(0, 0, 0, 0.69);
`;

export const answer = css`
    font-size: 1.8rem;
    overflow: hidden;

    @media only screen and (max-width: 695px) {
        font-size: 1.6rem;
    }

    @media only screen and (max-width: 425px) {
        font-size: 1.4rem;
    }
`;

export const dots = css`
    position: absolute;
    top: calc(50% - 4rem);
    right: 0;
    transform: translateY(-50%);
    width: 6rem;

    @media only screen and (max-width: 695px) {
        display: none;
    }

    svg {
        width: 100%;
        height: auto;
    }
`;
