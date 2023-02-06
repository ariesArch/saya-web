import { css } from "@emotion/react";

export const separator = css`
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    position: relative;
    z-index: 2;
    font-size: 1.8rem;
    font-weight: 500;

    span {
        background-color: #fff;
        color: var(--default-font-color);
        padding: 0.5rem 2rem;
        z-index: 2;
    }

    &::before {
        content: "";
        z-index: -1;
        width: 100%;
        height: 0.1rem;
        background-color: #e7e7e7;
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }
`;
