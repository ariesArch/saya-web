import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
`;

export const heading = css`
    font-size: 2.2rem;
    font-weight: 500;
    margin-bottom: 2.5rem;
`;

export const couponContainer = css`
    display: flex;
    align-items: center;
    padding: 2rem 2.5rem;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%236f6f6f' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='14' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 8px;
    margin-bottom: 1rem;
`;

export const copyButton = css`
    all: unset;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.98);
    }
`;

export const couponText = css`
    margin-right: 2rem;
    font-weight: 500;
    font-size: 2.5rem;
    flex-grow: 1;
    color: #6f6f6f;
`;

export const couponIcon = css`
    width: 3rem;
    height: auto;
`;

export const infoContainer = css`
    display: flex;
    align-items: flex-start;
`;

export const info = css`
    margin-left: 1rem;
    font-size: 1.3rem;
    font-weight: 500;
    color: #6f6f6f;
`;

export const alertIcon = css`
    width: 2rem;
    padding-top: 0.5rem;

    svg {
        width: 100%;
        height: auto;
        color: #6f6f6f;
    }
`;
