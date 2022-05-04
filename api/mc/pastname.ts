import { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";

export default async function (req: VercelRequest, res: VercelResponse) {
    let { id } = req.query;
    let data = await axios.get(`https://api.mojang.com/users/profiles/minecraft/${id}`);
    let uuid = data.data.id;
    let pastNames = await axios.get(`https://api.mojang.com/user/profiles/${uuid}/names`);
    res.json(pastNames.data)
}