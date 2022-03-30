import "@/public/css/globals.css";

import { ServerResponse } from "http";
import cookie from "js-cookie";
import { AppContext, AppProps } from "next/app";
import Router from "next/router";
import { Fragment, useEffect, useState } from "react";

import LoadingIndicator from "@/components/common/LoadingIndicator/LoadingIndicator.component";
import { InitialPageProps, UserData } from "@/interfaces/redux.interfaces";
import { onUserDataChange } from "@/store/auth/auth.actions";
import { wrapper } from "@/store/store";
import { createAxiosInstance, endpoints } from "@/utils/api";
import { redirectTo } from "@/utils/index";

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

const redirectOnEitherSide = (res: ServerResponse | undefined, pathname: string) => {
    if (res) {
        redirectTo(307, pathname, res);
    } else {
        Router.push(pathname);
    }
};

App.getInitialProps = wrapper.getInitialAppProps(
    (store) =>
        async ({ Component, ctx }: AppContext): Promise<InitialPageProps> => {
            const { req, pathname, res } = ctx;
            let pageProps = {};
            let token: string | undefined = "";
            let userData: UserData | undefined;

            if (Component.getInitialProps) {
                pageProps = await Component.getInitialProps(ctx);
            }

            if (req) {
                token = (req as any).cookies && (req as any).cookies.token;
            } else {
                token = cookie.get("token");
            }

            if (token) {
                try {
                    const instance = createAxiosInstance(token);
                    const { data } = await instance.get(endpoints.user.getProfile);

                    userData = { ...data };

                    if (data?.is_new_user) {
                        if (pathname !== "/complete-profile") {
                            redirectOnEitherSide(res, "/complete-profile");
                        }
                    } else {
                        if (pathname === "/" || pathname === "/complete-profile") {
                            redirectOnEitherSide(res, "/home");
                        }
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
