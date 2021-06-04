/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * 解析L类型画廊条目Html: 获取画廊类型
 * @name getType
 * @param td Cheerio  画廊类型 \<td\> 
 * @return string 画廊类型
 */
export default function getType(td: any): string {
    const type = td.find("div").text();
    return type;
}