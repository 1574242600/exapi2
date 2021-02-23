/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * 获取画廊类型
 * 
 * @param $ Cheerio  画廊类型 \<td\> 
 * @return string 画廊类型
 */
export default ($: any): string => {
    const type = $.find("div").text();
    return type;
};