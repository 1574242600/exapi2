/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * 解析画廊html: 获取画廊标题
 * @name getTitle
 * @param gd2 Cheerio \<div id=\"gd2\"\> 
 * @return [string, string] | [string, null] 画廊标题 [ 默认标题, 日文标题 (如果有) ]
 */
export default function getTitles(gd2: any): [string, string] | [string, null] {
    return [
        getDefaultTitle(gd2),
        getJPTitle(gd2)
    ];
}

export function getDefaultTitle(gd2: any): string {
    const defaultTitle = gd2.find("#gn").text();
    
    return defaultTitle;
}

export function getJPTitle(gd2: any): string | null {
    try {
        const JPTitle: string = gd2.find("#gj").text();

        return (<string>JPTitle).length > 0 ? JPTitle : null;
    } catch {
        return null;
    }
}