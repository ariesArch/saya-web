/* src/components/TabbedInterface.scss */
import { css } from "@emotion/react";

export const container = css`
    height: 100%;
`;
export const wrapper = css`
    display: flex;
    border-radius: 16px;
    border: 1px solid var(--neutral-n-100, #e2e2e2);
    background: var(--neutral-n-0, #fff);
`;
export const leftTab = css`
    display: flex;
    // width: 20.313rem;
    width: 25%;
    height: 888px;
    overflow: scroll;
    padding: 24px 0px 0px 20px;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    border-right: 1px solid var(--neutral-n-100, #e2e2e2);
`;
export const tabWrapper = css`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    flex: 1 0 0;
    align-self: stretch;
`;
export const tabHeading = css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
`;
export const tabHeader = css`
    color: var(--neutral-n-700, #363636);
    /* Paragraph/P-1/Semibold */
    font-family: Gelion;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 36px; /* 150% */
`;
export const tabMenu = css`
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: space-around;
    border-bottom: 1px solid var(--neutral-n-100, #e2e2e2);
    cursor: pointer;
`;
export const tab = (isActive: boolean) => css`
    display: flex;
    padding: 8px 12px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;
    color: ${isActive ? "var(--primary-p-500, #FB1A26);" : "var(--neutral-n-500, #6e6e6e)"};

    /* Subtitle/Medium */
    font-family: Gelion;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 125% */
`;
export const notiList = (isSelected: boolean) => css`
    display: flex;
    padding: 12px 16px 12px 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    border-bottom: 1px solid var(--neutral-n-100, #e2e2e2);
    opacity: ${isSelected ? 1 : 0.5};
    cursor: pointer;
`;
export const readIcon = css`
    height: 10px;
    width: 10px;
    background-color: var(--primary-p-500, #fb1a26);
    border-radius: 50%;
`;
export const notiItem = css`
    display: flex;
    gap: 8px;
`;
export const notiTitle = css`
    display: flex;
    justify-content: space-between;
`;
export const notiIcon = css`
    width: 48px;
    height: 48px;
    flex-shrink: 0;
`;
export const emptyMessageContainer = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
`;
export const tabContent = css`
    width: 75 %; /* Adjust the width as needed */
    padding: 20px;
`;
