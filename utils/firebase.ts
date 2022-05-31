import { getApp, getApps, initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import localforage from "localforage";

import { emptyFunction } from "@/utils/index";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID_PRODUCTION,
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const firebaseCloudMessaging = {
    tokenInlocalforage: async () => {
        const token = await localforage.getItem("fcm_token");
        return token;
    },

    onMessage: (onMessageCallback: (payload: any) => any = emptyFunction) => {
        const messaging = getMessaging();
        onMessage(messaging, onMessageCallback);
    },

    // eslint-disable-next-line consistent-return
    async init(onSuccess: (token: string) => any) {
        try {
            if ((await this.tokenInlocalforage()) !== null) {
                return false;
            }

            const messaging = getMessaging(app);
            await Notification.requestPermission();

            console.log("getting new token");
            getToken(messaging, {
                vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
            })
                .then((currentToken) => {
                    if (currentToken) {
                        onSuccess(currentToken);
                        localforage.setItem("fcm_token", currentToken);
                    } else {
                        // Show permission request UI
                        console.log("No registration token available. Request permission to generate one.");
                        // ...
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.error(error);
        }
    },
};

export { firebaseCloudMessaging };

// import { initializeApp } from "firebase/app";
// import { getMessaging, getToken, isSupported, onMessage } from "firebase/messaging";
//
// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };
//
// export const publicVapidKey = process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY;
//
// export const app = initializeApp(firebaseConfig);
//
// export const generateToken = async (onSuccess: (firebaseToken: string) => any) => {
//     if (!(await isSupported())) return;
//
//     const messaging = getMessaging(app);
//
//     getToken(messaging, { vapidKey: publicVapidKey })
//         .then((currentToken) => {
//             if (currentToken) {
//                 onSuccess(currentToken);
//             } else {
//                 console.log("No registration token available. Request permission to generate one.");
//             }
//         })
//         .catch((err) => {
//             console.log("An error occurred while retrieving token. ", err);
//             // ...
//         });
// };
//
// export const onFirebaseMessage = (onMessageCallback: (payload: any) => any) => {
//     const messaging = getMessaging();
//     onMessage(messaging, onMessageCallback);
// };
