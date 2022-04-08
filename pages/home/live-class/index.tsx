import { css } from "@emotion/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import HomeLayout from "@/layouts/HomeLayout";
import RadarIcon from "@/public/icons/radar.svg";
import { onLiveClassesFetchAsync } from "@/store/live-class/live-class.actions";

const LiveClassPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(onLiveClassesFetchAsync());
    }, [dispatch]);

    return (
        <HomeLayout
            showSidePanel={false}
            heading={
                <h5 css={heading}>
                    <RadarIcon /> Live Class
                </h5>
            }>
            <div css={container}>Live Class</div>
        </HomeLayout>
    );
};

const container = css`
    height: 100%;
    display: flex;
    flex-direction: column;
    font-size: 4rem;
`;

const heading = css`
    color: var(--color-primary);
    display: flex;
    align-items: center;

    svg {
        width: 3.5rem;
        height: auto;
        margin-right: 1rem;
    }
`;

export default LiveClassPage;
