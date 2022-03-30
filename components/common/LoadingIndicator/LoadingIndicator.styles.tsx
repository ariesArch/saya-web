import { css } from "@emotion/react";

export const container = ({
    isFinished,
    animationDuration,
}: {
    isFinished: boolean;
    animationDuration: number;
}) => css`
    opacity: ${isFinished ? 0 : 1};
    pointer-events: none;
    transition: opacity ${animationDuration}ms linear;
`;

export const bar = ({ progress, animationDuration }: { progress: number; animationDuration: number }) => css`
    background: var(--color-primary);
    height: 0.3rem;
    left: 0;
    margin-left: ${(-1 + progress) * 100}%;
    position: fixed;
    top: 0;
    transition: margin-left ${animationDuration}ms linear;
    width: 100%;
    z-index: 1031;
`;

export const spinner = css`
    box-shadow: 0 0 10px var(--color-primary-dark), 0 0 5px var(--color-primary-dark);
    display: block;
    height: 100%;
    opacity: 1;
    position: absolute;
    right: 0;
    transform: rotate(3deg) translate(0px, -4px);
    width: 100px;
`;
