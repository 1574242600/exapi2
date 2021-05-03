/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * 判断画廊是否有种子
 * 
 * @param td Cheerio  画廊发布时间 \<td\> 
 * @return boolean 
 */
export default (td: any): boolean => {
    const isHave = td.find(">div")
        .eq(2)
        .find(">div")
        .eq(2)
        .find(">a")
        .length === 1;

    return isHave;
};