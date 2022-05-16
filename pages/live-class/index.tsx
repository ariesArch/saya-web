import { css } from "@emotion/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import LiveClassSections from "@/components/live-class/LiveClassSections/LiveClassSections.component";
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
            backgroundColor="#fbfbfb"
            showSidePanel={false}
            heading={
                <h5 css={heading}>
                    <RadarIcon /> Live Class
                </h5>
            }>
            <LiveClassSections />
        </HomeLayout>
    );
};

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
