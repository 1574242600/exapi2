/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { toRating } from "../../../../../utils/convert";

/**
 * 解析索引html: 画廊大致的评分
 * 
 * @param td Cheerio  画廊发布时间 \<td\> 
 * @return number 画廊评分
 */
export default (td: any): number => {
    const style = td.find(">div")
        .eq(2)
        .find(">div")
        .eq(1)
        .attr("style");
    return toRating(style);
};