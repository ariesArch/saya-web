import { useRouter } from "next/router";
import Script from "next/script";
import { FC, Fragment, memo, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import { OTPResponse } from "@/interfaces/courses.interfaces";
import { fetchVideoOtp, submitVideoViewingBehavior } from "@/store/courses/courses.actions";

interface Props {
    vdocipherId: string;
}

const VideoPlayer: FC<Props> = ({ vdocipherId }) => {
    const router = useRouter();
    const { courseId } = router.query;
    const dispatch = useDispatch();
    const vdocipherIdRef = useRef();

    const onFetchOTPSuccess = ({ otp, playbackInfo }: OTPResponse) => {
        // this is the only way to keep track of vdocipher object
        // @ts-ignore
        window.vdocipher = new VdoPlayer({
            otp,
            playbackInfo,
            theme: "9ae8bbe8dd964ddc9bdb932cca1cb59a",
            // the container can be any DOM element on webapp
            container: document.querySelector("#vdocipherPlayer"),
        });
    };

    const onSubmitViewingBehavior = () => {
        // @ts-ignore
        const video = window?.vdocipher;
        dispatch(
            submitVideoViewingBehavior(
                {
                    vdocipher_id: vdocipherIdRef?.current || "",
                    ended_seeing_at: video?.currentTime || 0,
                    last_reached_second: video?.currentTime || 0,
                    started_seeing_at: 0,
                    total_covered_array: video?.totalCoveredArray
                        ? video.totalCoveredArray
                              .map((_value: number, i: number) => i)
                              .filter((value: number | null) => value !== null)
                        : [],
                    total_covered_seconds: video?.totalCovered || 0,
                    total_played_seconds: video?.totalPlayed || 0,
                },
                courseId as string
            )
        );
    };

    useEffect(() => {
        if (!vdocipherId) return;
        // @ts-ignore
        vdocipherIdRef.current = vdocipherId;
        dispatch(fetchVideoOtp(vdocipherId, onFetchOTPSuccess));
    }, [vdocipherId]);

    useEffect(() => {
        if (router.pathname.includes("/learn/")) {
            router.events.on("routeChangeStart", onSubmitViewingBehavior);
        }
        return () => {
            if (router.pathname.includes("/learn/")) {
                router.events.off("routeChangeStart", onSubmitViewingBehavior);
            }
        };
    }, []);

    return (
        <Fragment>
            <div id="vdocipherPlayer" />

            <Script src="https://player.vdocipher.com/playerAssets/1.6.10/vdo.js" />
        </Fragment>
    );
};

export default memo(VideoPlayer);
