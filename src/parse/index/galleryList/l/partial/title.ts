/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * 解析索引html: 画廊标题
 * 
 * @param td Cheerio  标题 \<td\> 
 * @return string 画廊标题
 */
export default (td: any): string => {
    const title = td.find("a>div").eq(0).text();
    return title;
};