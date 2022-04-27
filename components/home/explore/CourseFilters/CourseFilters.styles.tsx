import { css } from "@emotion/react";

export const courseFilters = css`
    display: flex;
    align-items: center;
`;

export const dropdownWrapper = css`
    font-size: 1.7rem;
    padding: 0.6rem 1.2rem;
    position: relative;
    margin-right: 2rem !important;
    display: flex;
    align-items: center;
    border: 1px solid var(--color-primary);
    border-radius: 2.5rem;

    span {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }

    svg {
        width: 2rem;
        height: auto;
        color: var(--color-primary);
    }

    &::after {
        content: "";
        position: absolute;
        right: -1.2rem;
        top: 5%;
        width: 1px;
        background-color: #eee;
        height: 90%;
    }
`;

export const filterItems = css`
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    button {
        padding: 0.6rem 1.5rem;
        margin: 0.5rem 0;

        &:not(:last-child) {
            margin-right: 1rem;
        }
    }
`;

export const popupContent = css`
    display: flex;
    flex-direction: column;
`;

export const popupContentItem = css`
    padding: 0.8rem 1.5rem;
    font-size: 1.5rem;
    background-color: #fff;
    display: flex;
    cursor: pointer;
    transition: all 0.2s;

    &:not(:last-of-type) {
        border-bottom: 1px solid #f5f5f5;
    }

    &:hover {
        background-color: #f9f9f9;
    }
`;
