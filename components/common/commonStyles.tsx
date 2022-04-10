import { css } from "@emotion/react";

export const clickEffect = css`
    transition: all 0.2s;

    &:active {
        transform: scale(0.95);
    }
`;
