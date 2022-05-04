import { VercelRequest, VercelResponse } from "@vercel/node"

export default function (req: VercelRequest, res: VercelResponse) {
    let { name } = req.query;
    res.json({ "message": `Hello, ${name || "World"}!` })
}