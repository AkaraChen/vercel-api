import { VercelRequest, VercelResponse } from "@vercel/node"

export default function (req: VercelRequest, res: VercelResponse) {
    let { qq, group } = req.query;
    let url = "https://raw.githubusercontent.com/AkaraChen/picbed/main/859549-20201206214408962-551563995.png";
    if (qq) {
        url = `https://q1.qlogo.cn/g?b=qq&nk=${qq}&s=640`;
    } else if (group) {
        url = `https://p.qlogo.cn/gh/${group}/${group}/0`
    } else {
        res.statusCode = 400;
    }
    res.redirect(url)
}