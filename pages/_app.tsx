import "@/public/css/globals.css";

import cookie from "js-cookie";
import { AppContext, AppProps } from "next/app";
import { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import LoadingIndicator from "@/components/common/LoadingIndicator/LoadingIndicator.component";
import useRouteHandler from "@/hooks/useRouteHandler";
import { InitialPageProps, ReduxState } from "@/interfaces/redux.interfaces";
import { UserData } from "@/interfaces/user.interfaces";
import { updateFirebaseTokenAsync } from "@/store/notifications/notifications.actions";
import { onPaymentModalToggle, onPaymentSuccessModalToggle } from "@/store/payment/payment.actions";
import { wrapper } from "@/store/store";
import { fetchUserDataAsync, onUserDataChange } from "@/store/user/user.actions";
import { createAxiosInstance, endpoints } from "@/utils/api";
import { firebaseCloudMessaging } from "@/utils/firebase";
import { redirectOnEitherSide } from "@/utils/index";

interface Props extends InitialPageProps, AppProps {}

const App = ({ Component, pageProps, ...rest }: Props) => {
    const { userData } = useSelector((state: ReduxState) => ({ userData: state.userState.userData }));
    const dispatch = useDispatch();
    const [mounted, setMounted] = useState(false);
    const { isRouteChanging, loadingKey } = useRouteHandler();
    const firebaseTokenUpdatedRef = useRef(false);

    const onPaymentSuccess = () => {
        dispatch(fetchUserDataAsync());
        dispatch(onPaymentModalToggle(false));

        setTimeout(() => {
            dispatch(onPaymentSuccessModalToggle(true));
        }, 200);
    };

    useEffect(() => {
        if (!mounted) return;

        if (userData.phone) {
            firebaseCloudMessaging.onMessage((payload) => {
                if (payload?.notification?.title === "Payment Successful") {
                    onPaymentSuccess();
                }

                if ("Notification" in window) {
                    if (Notification.permission !== "granted") {
                        Notification.requestPermission();
                    }

                    // eslint-disable-next-line no-new
                    new Notification((payload.notification?.title as string) || "", {
                        body: payload.notification?.body || "",
                        icon: "/favicon-32x32.png",
                    });
                }
            });
        } else {
            // to remove the listener
            firebaseCloudMessaging.onMessage();
        }
    }, [userData, mounted]);

    useEffect(() => {
        if (!userData?.phone || firebaseTokenUpdatedRef.current) return;

        firebaseTokenUpdatedRef.current = true;

        firebaseCloudMessaging.init((token) => dispatch(updateFirebaseTokenAsync(token)));

        const setToken = async () => {
            const token = await firebaseCloudMessaging.tokenInlocalforage();
            if (token) {
                setMounted(true);
            }
        };
        setToken();
    }, [userData]);

    return (
        <Fragment>
            <LoadingIndicator isRouteChanging={isRouteChanging} key={loadingKey} />
            <Component {...pageProps} {...rest} />
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
            const allowedPaths = ["/faq", "/platforms", "/link-campaign/[campaignId]"];

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
                    if (e?.response?.status === 401) {
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
                cookie.remove("onepay_only_view");
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
