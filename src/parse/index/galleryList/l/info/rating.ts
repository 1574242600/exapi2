/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { toRating } from "@utils/convert";

/**
 * 解析L类型画廊条目Html: 获取画廊大致的评分
 * @name getRating
 * @param td Cheerio  画廊发布时间 \<td\> 
 * @return number 画廊评分
 */
export default function getRating(td: any): number {
    const style = td.find(">div")
        .eq(2)
        .find(">div")
        .eq(1)
        .attr("style");
    return toRating(style);
}