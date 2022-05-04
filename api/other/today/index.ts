import { VercelRequest, VercelResponse } from "@vercel/node";
import fs from 'fs'

const getToday = () => {
    var date = new Date();
    var nowMonth = date.getMonth() + 1;
    var strDate = date.getDate();
    return `${nowMonth}月${strDate}日`;
}

export default function (_req: VercelRequest, res: VercelResponse) {
    res.json(JSON.parse(fs.readFileSync(`./api/other/today/list/${getToday()}.json`).toString()));
}