import { css } from "@emotion/react";

export const quizAudioPlayer = css`
    padding: 2rem 0;
    color: #fff;
    transition: all 0.2s;
    display: flex;
    justify-content: center;

    svg {
        width: 8rem;
        height: auto;
    }
`;

export const preloader = css`
    height: 6.8rem;
    display: flex;
    align-items: center;

    span {
        display: block;
        position: relative;
        background: #f1f1f1;
        height: 100%;
        width: 0.7rem;
        border-radius: 4rem;
        animation: animate 0.5s linear infinite;

        &:not(:last-child) {
            margin-right: 0.6rem;
        }

        &:nth-child(1) {
            animation-delay: 0s;
        }
        &:nth-child(2) {
            animation-delay: 0.1s;
        }
        &:nth-child(3) {
            animation-delay: 0.2s;
        }
        &:nth-child(4) {
            animation-delay: 0.3s;
        }
        &:nth-child(5) {
            animation-delay: 0.2s;
        }
        &:nth-child(6) {
            animation-delay: 0.1s;
        }
        &:nth-child(7) {
            animation-delay: 0s;
        }
    }

    @keyframes animate {
        30% {
            height: 20%;
        }
        100% {
            height: 100%;
        }
    }
`;

export const speakerButton = css`
    color: #fff;
`;
