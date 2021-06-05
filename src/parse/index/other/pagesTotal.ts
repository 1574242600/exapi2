/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * 解析索引html: 获取当前搜索结果的总页数
 * @name getPagesTotal
 * @param $ Cheerio.Root root
 * @return number 总页数
 */
export default function getPagesTotal($: any): number {
    try {
        const text: string = $("table[class='ptt']>tbody>tr>td")
            .eq(-2)
            .text();

        if (text.length === 0) return 0;
        return parseInt(text);
    } catch {
        return 0;
    }
}