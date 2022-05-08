import { ZoomMtg } from "@zoomus/websdk";
import axios from "axios";
import { AES, enc, mode } from "crypto-js";

import { siteURL, zoomDecryptionKey, zoomSdkKey } from "@/utils/constants";

ZoomMtg.setZoomJSLib("https://source.zoom.us/2.4.0/lib", "/av");

ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();

export const decrypt = (encrypted: string) => {
    const keyUtf8 = enc.Utf8.parse(zoomDecryptionKey || "");

    return enc.Utf8.stringify(AES.decrypt(encrypted, keyUtf8, { mode: mode.ECB, keySize: 128 })).toString();
};

export const generateSignature = async (meetingNumber: string) => {
    let signature = "";
    try {
        // fetching from the api route
        const { data } = await axios.get(
            `/api/zoom/signature?meetingNumber=${encodeURIComponent(meetingNumber)}&role=${encodeURIComponent(
                0
            )}`
        );

        signature = data;
    } catch (e) {
        console.log(e);
    }

    return signature;
};

export const startMeeting = async ({
    meetingNumber,
    userName,
    passWord,
}: {
    meetingNumber: string;
    userName: string;
    passWord: string;
}) => {
    const decryptedMeetingNumber = decrypt(meetingNumber);
    const decryptedPassword = decrypt(passWord);

    const signature = await generateSignature(decryptedMeetingNumber);

    if (!signature) return;

    ZoomMtg.init({
        leaveUrl: `${siteURL}/home/live-class`,
        success: (success: any) => {
            console.log(success);

            ZoomMtg.join({
                signature,
                meetingNumber: decryptedMeetingNumber,
                userName,
                apiKey: zoomSdkKey,
                userEmail: "",
                passWord: decryptedPassword,
                success: (success: any) => {
                    console.log(success);
                },
                error: (error: any) => {
                    console.log(error);
                },
            });
        },
        error: (error: any) => {
            console.log(error);
        },
    });
};
