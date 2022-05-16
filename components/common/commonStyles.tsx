import { css } from "@emotion/react";

export const clickEffect = css`
    transition: all 0.2s;

    &:active {
        transform: scale(0.95);
    }
`;

export const timeKeeperStyles = css`
    .react-timekeeper {
        font-family: inherit;
        box-shadow: none;

        &__tb {
            &-meridiem {
                display: none;
            }

            &-hour,
            &-minute {
                &--active {
                    color: #222;
                }
            }
        }

        &__clock-wrapper {
            background-color: #fff;
            padding-top: 5px;

            & > div:nth-of-type(2) {
                position: absolute;
                top: 2.5rem;
                right: 4.5rem;
                display: flex;
                flex-direction: column;
                padding: 0;
                margin: 0;
            }
        }

        &__clock-hours {
            & > span {
            }
        }
        &__clock-hand {
            background-color: #f3f3f3;
            border-radius: 50%;
            stroke: var(--color-blue);
            stroke-width: 2;
        }
        &__hand-circle-outer {
            fill: var(--color-blue);
            color: #fff;
        }
        &__hand-circle-center {
            fill: var(--color-blue);
        }

        &__meridiem {
            &-toggle {
                width: auto;
                height: fit-content;
                line-height: unset;
                padding: 0 0.5rem;
                border-radius: unset;
                background-color: transparent;
                font-size: 1.3rem;
                font-weight: 600;
            }
            &--active {
                color: #222;
            }
        }
    }
`;
