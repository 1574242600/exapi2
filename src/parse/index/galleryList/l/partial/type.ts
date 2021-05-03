/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * 解析索引html: 画廊类型
 * 
 * @param td Cheerio  画廊类型 \<td\> 
 * @return string 画廊类型
 */
export default (td: any): string => {
    const type = td.find("div").text();
    return type;
};