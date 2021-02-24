/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import toRating from "../../../../../utils/styleToRating";

/**
 * 获取画廊大致的评分
 * 
 * @param $ Cheerio  画廊发布时间 \<td\> 
 * @return number 画廊评分
 */
export default ($: any): number => {
    const style = $.find(">div")
        .eq(2)
        .find(">div")
        .eq(1)
        .attr("style");
    return toRating(style);
};