import { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";
import convert from "xml-js"

export default async function (_req: VercelRequest, res: VercelResponse) {
    let { data: xml } = await axios.get('https://cn.bing.com/HPImageArchive.aspx?idx=0&n=1');
    let result = convert.xml2js(xml, { compact: true });
    res.redirect(`https://cn.bing.com${result["images"]["image"]["url"]["_text"]}`)
}