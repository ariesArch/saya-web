import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

import { vdocipherSecretKey } from "@/utils/constants";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
        const { videoId } = req.query;

        if (typeof videoId !== "string") return res.status(400).send("Please add videoId in your query");

        const instance = axios.create({
            headers: {
                Authorization: `Apisecret ${vdocipherSecretKey}`,
            },
        });

        try {
            const { data } = await instance.get(`https://dev.vdocipher.com/api/videos/${videoId}/otp`);

            return res.status(200).json(data);
        } catch (e) {
            console.log(e);
            return res.status(500).send("Failed to generate the OTP.");
        }
    }

    return res.status(400).send(`${req.method} Bad request`);
};

export default handler;
