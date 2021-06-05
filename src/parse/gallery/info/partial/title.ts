/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * 解析画廊html: 获取画廊标题
 * @name getTitle
 * @param gleft Cheerio \<div id=\"gd2\"\> 
 * @return [string, string] | [string, null] 画廊标题 [ 默认标题, 日文标题 (如果有) ]
 */
export default function getTitle(gd2: any): [string, string] | [string, null] {
    const defaultTitle: string = gd2.find("#gn").text();

    try {
        const JPTitle: string = gd2.find("#gj").text();
        const isHaveJPT = (<string>JPTitle).length > 0;

        return [
            defaultTitle, 
            isHaveJPT ? JPTitle : null
        ];
        
    } catch {
        return [defaultTitle, null];
    }
}