import { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";

export default async function (req: VercelRequest, res: VercelResponse) {
    let { qq } = req.query;
    let status = await axios.get(`https://webpresence.qq.com/getonline?Type=1&${qq}:`);
    res.json({ online: !(status.data === "online[0]=0;") });
}