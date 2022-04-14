import crypto from "crypto";
import { NextApiRequest, NextApiResponse } from "next";

import { zoomSdkKey, zoomSdkSecretKey } from "@/utils/constants";

function generateSignature(apiKey: string, apiSecret: string, meetingNumber: string, role: number) {
    // Prevent time sync issue between client signature generation and zoom
    const timestamp = new Date().getTime() - 30000;
    const msg = Buffer.from(apiKey + meetingNumber + timestamp + role).toString("base64");
    const hash = crypto.createHmac("sha256", apiSecret).update(msg).digest("base64");

    return Buffer.from(`${apiKey}.${meetingNumber}.${timestamp}.${role}.${hash}`).toString("base64");
}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
        const { meetingNumber, role } = req.query;

        if (typeof meetingNumber !== "string" || typeof role !== "string")
            return res.status(400).send("Please add meetingNumber and role in your query");

        const signature = generateSignature(
            zoomSdkKey || "",
            zoomSdkSecretKey || "",
            meetingNumber,
            parseInt(role, 10)
        );

        return res.status(200).json(signature);
    }

    return res.status(400).send(`${req.method} Bad request`);
};

export default handler;
