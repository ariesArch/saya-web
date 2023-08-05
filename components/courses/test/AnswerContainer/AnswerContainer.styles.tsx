import { css } from "@emotion/react";

export const answersContainer = (isMultipleChoice: boolean) => css`
    display: flex;
    margin: 2rem 0 6rem;
    flex-wrap: wrap;

    ${isMultipleChoice ? `flex-direction: column;` : `justify-content: center;`};
`;

export const selectItem = (
    isActive: boolean,
    isMultipleChoice: boolean,
    isTrueFalse: boolean,
    isAnswerSelected: boolean
) => css`
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 1.4rem;
    border: 2px solid transparent;
    cursor: pointer;
    font-size: 1.8rem;
    margin: 1rem 0;
    transition: all 0.2s;

    &:hover {
        background-color: rgba(0, 0, 0, 0.15);
    }

    &:active {
        background-color: rgba(0, 0, 0, 0.12);
    }

    span {
        word-break: break-all;
    }

    ${isActive && `border-color: #fff;`};
    ${isAnswerSelected &&
    `
        cursor: default;
        
        &:hover {
            background-color: rgba(0, 0, 0, 0.1);
        }

        &:active {
             background-color: rgba(0, 0, 0, 0.1);
        }
    `};

    ${!isMultipleChoice
        ? `
        white-space: nowrap;
    
        &:not(:last-child) {
            margin-right: 1.5rem;
        }
    `
        : ``};

    ${isTrueFalse &&
    `
        justify-content: center;
        flex-basis: calc(100% - 0.75rem);
        font-size: 2.2rem;
    `}
`;

export const selectItemIcon = css`
    width: 2.2rem;
    height: 2.2rem;
    margin-right: 1.2rem;
    flex-shrink: 0;
    display: flex;

    svg {
        width: 100%;
        height: auto;
    }
`;

export const label = css`
    font-size: inherit;
`;
