/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * 解析画廊html: 画廊封面
 * @param gleft Cheerio \<div id=\"gleft\"\> 
 * @return string 画廊封面url
 */
export default (gleft: any): string => {
    const url = gleft.find("#gd1>div")
        .attr("style")
        .match(/url\((.*?)\)/)[1];

    return url;
};