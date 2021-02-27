/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * 获取画廊封面
 * 
 * @param $ Cheerio  画廊发布时间 \<td\> 
 * @return string 画廊封面url
 */
export default ($: any): string => {
    const img = $.find(">div")
        .eq(1)
        .find(">div>img");

    const src = img.attr("data-src") !== undefined
        ? img.attr("data-src") 
        : img.attr("src");

    return src;
};