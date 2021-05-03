/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * 解析画廊 id 和 token
 * 
 * @param td Cheerio  画廊标题 \<td\> 
 * @return [number, string] 画廊 id 和 token
 */
export default (td: any): [number, string] => {
    const href = td.find("a").attr("href");
    return href
        .match(/\/([0-9]+)\/([0-9a-z]{10})\//)
        .slice(1);
};