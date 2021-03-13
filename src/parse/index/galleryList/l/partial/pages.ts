/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * 解析索引html: 画廊页数
 * 
 * @param $ Cheerio  上传者 \<td\> 
 * @return number 画廊页数
 */
export default ($: any): number => {
    const text = $.find("div")
        .eq(1)
        .text();

    return parseInt(text);
};