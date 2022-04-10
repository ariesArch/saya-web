import "@/public/css/globals.css";

import cookie from "js-cookie";
import { AppContext, AppProps } from "next/app";
import Router from "next/router";
import { Fragment, useEffect, useState } from "react";

import LoadingIndicator from "@/components/common/LoadingIndicator/LoadingIndicator.component";
import { InitialPageProps } from "@/interfaces/redux.interfaces";
import { UserData } from "@/interfaces/user.interfaces";
import { wrapper } from "@/store/store";
import { onUserDataChange } from "@/store/user/user.actions";
import { createAxiosInstance, endpoints } from "@/utils/api";
import { redirectOnEitherSide } from "@/utils/index";

interface Props extends InitialPageProps, AppProps {}

const App = ({ Component, pageProps }: Props) => {
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

        const handleRouteChangeEnd = () => {
            setState((prevState) => ({
                ...prevState,
                isRouteChanging: false,
            }));
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

    return (
        <Fragment>
            <LoadingIndicator isRouteChanging={state.isRouteChanging} key={state.loadingKey} />
            <Component {...pageProps} />
        </Fragment>
    );
};

App.getInitialProps = wrapper.getInitialAppProps(
    (store) =>
        async ({ Component, ctx }: AppContext): Promise<InitialPageProps> => {
            const { req, pathname, res } = ctx;
            let pageProps = {};
            let token: string | undefined = "";
            let userData: UserData | undefined;
            // the routes that don't need any conditional logics to be redirected or not.
            const allowedPaths = ["/testing", "/about"];

            if (Component.getInitialProps) {
                pageProps = await Component.getInitialProps(ctx);
            }

            if (req) {
                token = (req as any).cookies && (req as any).cookies.token;
            } else {
                token = cookie.get("token");
            }

            if (allowedPaths.includes(pathname)) {
                return {
                    pageProps,
                    token,
                };
            }

            if (token) {
                try {
                    const instance = createAxiosInstance(token);
                    const { data } = await instance.get(endpoints.user.getProfile);

                    userData = { ...data };

                    if (pathname === "/") {
                        redirectOnEitherSide(res, "/home");
                    }
                } catch (e) {
                    // only remove the token if the token is invalid // preventing the token from being remove if the user lost the connection
                    if ((e as any)?.response?.status === 401) {
                        if (res) {
                            res.setHeader(
                                "Set-Cookie",
                                "token=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
                            );
                        } else {
                            cookie.remove("token");
                        }

                        if (pathname !== "/") {
                            redirectOnEitherSide(res, "/");
                        }
                    }
                }
            } else {
                if (pathname !== "/") {
                    redirectOnEitherSide(res, "/");
                }
            }

            if (userData) {
                store?.dispatch(onUserDataChange(userData));
            }

            return {
                pageProps,
                token,
            };
        }
);

export default wrapper.withRedux(App);
