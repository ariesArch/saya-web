// import { withSentry } from "@sentry/nextjs";
// import crypto from "crypto";
import { NextApiRequest, NextApiResponse } from "next";
import { zoomSdkKey } from "@/utils/constants";
const KJUR = require("jsrsasign");

function generateSignature(apiKey: string, apiSecret: string, meetingNumber: string, role: number) {
    const iat = Math.round(new Date().getTime() / 1000) - 30;
    const exp = iat + 60 * 60 * 2;
    const oHeader = { alg: "HS256", typ: "JWT" };

    const oPayload = {
        sdkKey: apiKey,
        appKey: apiKey,
        mn: meetingNumber,
        role: role,
        iat: iat,
        exp: exp,
        tokenExp: exp,
    };

    const sHeader = JSON.stringify(oHeader);
    const sPayload = JSON.stringify(oPayload);
    const sdkJWT = KJUR.jws.JWS.sign("HS256", sHeader, sPayload, apiSecret);
    return sdkJWT;
    // Prevent time sync issue between client signature generation and zoom
    // const timestamp = new Date().getTime() - 30000;
    // const msg = Buffer.from(apiKey + meetingNumber + timestamp + role).toString("base64");
    // const hash = crypto.createHmac("sha256", apiSecret).update(msg).digest("base64");

    // return Buffer.from(`${apiKey}.${meetingNumber}.${timestamp}.${role}.${hash}`).toString("base64");
}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
        const { meetingNumber, role } = req.query;

        if (typeof meetingNumber !== "string" || typeof role !== "string")
            return res.status(400).send("Please add meetingNumber and role in your query");

        const signature = generateSignature(
            zoomSdkKey || "",
            process.env.ZOOM_API_SECRET_KEY || "",
            meetingNumber,
            parseInt(role, 10)
        );

        return res.status(200).json(signature);
    }

    return res.status(400).send(`${req.method} Bad request`);
};

// export default withSentry(handler);
export default handler;
