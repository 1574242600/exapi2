/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * 获取画廊封面
 * 
 * @param $ Cheerio  画廊发布时间 \<td\> 
 * @return string 画廊封面url
 */
export default ($: any): string => {
    const src = $.find(">div")
        .eq(1)
        .find(">div>img")
        .attr("src");

    return src;
};