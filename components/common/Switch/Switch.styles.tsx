import { css } from "@emotion/react";

export const switchWrapper = (isOn: boolean) => css`
    width: 4rem;
    height: 2rem;
    background-color: #eaeaea;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 1.25rem;
    cursor: pointer;

    ${isOn && `justify-content: flex-end;`};
`;

export const switchHandle = css`
    width: 2.2rem;
    height: 2.2rem;
    background-color: var(--color-green-light);
    border-radius: 50%;
`;
