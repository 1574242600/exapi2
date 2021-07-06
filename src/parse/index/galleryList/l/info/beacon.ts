/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { GalleryBeacon } from "@types";
/**
 * 解析L类型画廊条目Html: 获取 画廊 id 和 token
 * @name getBeacon
 * @param td Cheerio  画廊标题 \<td\> 
 * @return GalleryBeacon 画廊 id 和 token
 */
export default function getBeacon(td: any): GalleryBeacon {
    const href = td.find("a").attr("href");
    
    const [id, token] = href
        .match(/\/([0-9]+)\/([0-9a-z]{10})\//)
        .slice(1);

    return { 
        id,
        token
    };
}