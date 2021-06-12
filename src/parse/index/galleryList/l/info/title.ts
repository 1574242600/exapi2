/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * 解析L类型画廊条目Html: 获取画廊标题
 * @name getTitle
 * @param td Cheerio  标题 \<td\> 
 * @return string 画廊标题
 */
export default function getTitle(td: any): string {
    const title = td.find("a>div").eq(0).text();
    return title;
}