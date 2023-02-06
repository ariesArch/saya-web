import Router, { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import ReactGA from "react-ga";

import { GATrackingId } from "@/utils/constants";

const useRouteHandler = () => {
    const router = useRouter();
    const [state, setState] = useState({
        isRouteChanging: false,
        loadingKey: 0,
    });

    useEffect(() => {
        const handleRouteChangeStart = () => {
            setState((prevState) => ({
                ...prevState,
                isRouteChanging: true,
                // eslint-disable-next-line no-bitwise
                loadingKey: prevState.loadingKey ^ 1,
            }));
        };
        if (process.env.NEXT_PUBLIC_ENVIRONMENT === "production") {
            ReactGA.initialize(GATrackingId as string, { debug: false });
            ReactGA.set({ page: router.pathname });
            ReactGA.pageview(router.pathname);
        }

        const handleRouteChangeEnd = (url: string) => {
            setState((prevState) => ({
                ...prevState,
                isRouteChanging: false,
            }));

            if (process.env.NEXT_PUBLIC_ENVIRONMENT === "production") {
                ReactGA.set({ page: url });
                ReactGA.pageview(url);
            }
        };

        Router.events.on("routeChangeStart", handleRouteChangeStart);
        Router.events.on("routeChangeComplete", handleRouteChangeEnd);
        Router.events.on("routeChangeError", handleRouteChangeEnd);

        return () => {
            Router.events.off("routeChangeStart", handleRouteChangeStart);
            Router.events.off("routeChangeComplete", handleRouteChangeEnd);
            Router.events.off("routeChangeError", handleRouteChangeEnd);
        };
    }, []);

    return useMemo(
        () => ({ isRouteChanging: state.isRouteChanging, loadingKey: state.loadingKey }),
        [state.isRouteChanging, state.loadingKey]
    );
};

export default useRouteHandler;
