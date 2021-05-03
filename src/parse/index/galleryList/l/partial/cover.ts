/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * 解析索引html: 画廊封面
 * 
 * @param td Cheerio  画廊发布时间 \<td\> 
 * @return string 画廊封面url
 */
export default (td: any): string => {
    const img = td.find(">div")
        .eq(1)
        .find(">div>img");

    const src = img.attr("data-src") !== undefined
        ? img.attr("data-src") 
        : img.attr("src");

    return src;
};