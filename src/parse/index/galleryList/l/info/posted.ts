/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { toStringTime } from "../../../../../utils/convert/index" ;

/**
 * 解析L类型画廊条目Html: 获取画廊发布时间
 * @name getPosted
 * @param td Cheerio  画廊发布时间 \<td\> 
 * @return number 画廊发布时间戳 (UTC±0)
 */
export default function getPosted(td: any): number {
    const timeString = td.find(">div")
        .eq(2)
        .find(">div")
        .eq(0)
        .text();
    return toStringTime(timeString);
}