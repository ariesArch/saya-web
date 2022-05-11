import { css } from "@emotion/react";

export const spinnerContainer = css`
    display: inline-block;
    width: 5rem;
    height: 5rem;
    border: 0.3rem solid rgba(195, 195, 195, 0.6);
    border-radius: 50%;
    border-top-color: #636767;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
    @keyframes spin {
        to {
            -webkit-transform: rotate(360deg);
        }
    }
    @-webkit-keyframes spin {
        to {
            -webkit-transform: rotate(360deg);
        }
    }
`;
