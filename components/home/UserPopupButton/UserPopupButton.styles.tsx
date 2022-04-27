import { css } from "@emotion/react";

export const popupContents = css`
    display: flex;
    flex-direction: column;
    min-width: 37rem;
`;

export const header = css`
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;
`;

export const userInfo = css`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
`;

export const userInfoTexts = css`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
`;

export const username = css`
    font-size: 2rem;
    font-weight: 600;
`;

export const phone = css`
    font-size: 1.6rem;
    white-space: nowrap;
`;

export const subInfo = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5rem;
`;

export const subInfoTexts = css`
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;

    strong {
        font-size: 1.8rem;
        font-weight: 600;
    }
`;

export const renewBtn = css`
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    padding: 0.3rem 0.8rem;

    svg {
        width: 1.7rem;
        height: auto;
        margin-right: 0.5rem;
    }
`;

export const progressBar = css`
    margin-top: 1rem;
`;

export const premiumBtn = css`
    display: flex;
    align-items: center;
    padding: 0.6rem 0.8rem;
    border-radius: 0.5rem;
    margin-top: 1rem;
    font-size: 1.9rem;
    font-weight: 600;
    width: calc(100% + 2rem);
    margin-left: -1rem;
`;

export const crownIcon = css`
    margin-right: 1rem;
    width: 2.5rem;
    height: auto;
`;

export const rightArrow = css`
    margin-left: auto;
`;

export const row = css`
    padding: 0.5em 2rem;
    display: flex;
    align-items: center;
    font-size: 1.7rem;

    svg {
        width: 2rem;
        height: auto;
        margin-right: 1rem;
    }
`;

export const col = css`
    display: flex;
    flex-direction: column;

    strong {
    }

    span {
        font-size: 1.4rem;
    }
`;

export const badge = css`
    margin-left: auto;

    svg {
        width: auto;
        height: 4rem !important;
        margin: 0;
    }
`;

export const menuItem = css`
    padding: 0.5em 2rem;
    display: flex;
    align-items: center;
    font-size: 1.7rem;
    transition: all 0.2s;

    svg {
        width: 2rem;
        height: auto;
        margin-right: 1rem;
    }

    &:hover {
        background-color: rgba(225, 225, 225, 0.2);
    }
`;
