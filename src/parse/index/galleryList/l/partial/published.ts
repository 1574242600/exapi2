/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { toStringTime } from "../../../../../utils/convert/index" ;

/**
 * 解析索引html: 画廊发布时间
 * 
 * @param td Cheerio  画廊发布时间 \<td\> 
 * @return number 画廊发布时间戳 (UTC±0)
 */
export default (td: any): number => {
    const timeString = td.find(">div")
        .eq(2)
        .find(">div")
        .eq(0)
        .text();
    return toStringTime(timeString);
};