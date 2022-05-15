import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { Fragment, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ReduxState } from "@/interfaces/redux.interfaces";
import DefaultLayout from "@/layouts/DefaultLayout";
import { onLiveClassesFetchAsync } from "@/store/live-class/live-class.actions";

const LiveClassJoinPage = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { classId } = router.query;

    const { event, user } = useSelector((state: ReduxState) => ({
        event: state.liveClassState.events.find((e) => e.zoom_meeting_id === classId),
        user: state.userState.userData,
    }));

    const startMeeting = useCallback(async () => {
        if (!event) return;
        if (!event.is_live) return;

        const { startMeeting } = await import("@/utils/zoom");

        if (window) {
            const { zoom_meeting_id, zoom_meeting_password } = event;

            await startMeeting({
                meetingNumber: zoom_meeting_id,
                passWord: zoom_meeting_password,
                userName: user.name,
            });
        }
    }, [event, user.name]);

    useEffect(() => {
        startMeeting();
    }, [startMeeting]);

    useEffect(() => {
        dispatch(onLiveClassesFetchAsync());
    }, [dispatch]);

    return (
        <DefaultLayout
            headChildren={
                <Fragment>
                    <link
                        type="text/css"
                        rel="stylesheet"
                        href="https://source.zoom.us/2.4.0/css/bootstrap.css"
                    />
                    <link
                        type="text/css"
                        rel="stylesheet"
                        href="https://source.zoom.us/2.4.0/css/react-select.css"
                    />
                </Fragment>
            }>
            <div css={container}>
                <h1>
                    {event
                        ? event?.is_live
                            ? "Joining Class . . ."
                            : "The event is not live."
                        : "Loading .. ."}
                </h1>
            </div>
        </DefaultLayout>
    );
};

const container = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    height: 80vh;
    width: 100%;
    background-color: #fff;
    border-radius: 1rem;
    padding: 2rem 4rem;

    h1 {
        margin-bottom: 1rem;
    }
`;

export default LiveClassJoinPage;
