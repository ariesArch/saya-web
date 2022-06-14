import { withSentry } from "@sentry/nextjs";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

import { vdocipherSecretKey } from "@/utils/constants";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
        const { videoId } = req.query;

        if (typeof videoId !== "string") {
            res.status(400).send("Please add videoId in your query");
            return res.end();
        }

        const instance = axios.create({
            headers: {
                Authorization: `Apisecret ${vdocipherSecretKey}`,
            },
        });

        try {
            const { data } = await instance.get(`https://dev.vdocipher.com/api/videos/${videoId}/otp`);

            res.status(200).json(data);
            return res.end();
        } catch (e) {
            console.log(e);
            res.status(500).send("Failed to generate the OTP.");
            return res.end();
        }
    }

    res.status(400).send(`${req.method} Bad request`);
    return res.end();
};

export default withSentry(handler as (req: NextApiRequest, res: NextApiResponse) => void);
