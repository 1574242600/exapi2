/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * 解析L类型画廊条目Html: 获取画廊页数
 * @name getPages
 * @param td Cheerio  上传者 \<td\> 
 * @return number 画廊页数
 */
export default function getPages(td: any): number {
    const text = td.find("div")
        .eq(1)
        .text();

    return parseInt(text);
}