/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * 解析索引html: 当前搜索结果的总页数
 * 
 * @param $ Cheerio.Root root
 * @return number 总页数
 */
export default ($: any): number => {
    try {
        const text: string = $("table[class='ptt']>tbody>tr>td")
            .eq(-2)
            .text();

        if (text.length === 0) return 0;
        return parseInt(text);
    } catch {
        return 0;
    }
};