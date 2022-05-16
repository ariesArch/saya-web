import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
`;

export const scheduleItem = css`
    padding: 0.6rem 1.2rem;

    &:not(:last-child) {
        margin-bottom: 2rem;
    }
`;
