/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * 获取画廊 id 和 token
 * 
 * @param $ Cheerio  画廊标题 \<td\> 
 * @return [number, string] 画廊 id 和 token
 */
export default ($: any): [number, string] => {
    const href = $.find("a").attr("href");
    return href
        .match(/\/([0-9]+)\/([0-9a-z]{10})\//)
        .slice(1);
};