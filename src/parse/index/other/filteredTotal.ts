/**
 * 解析索引html: 获取当前搜索条件下被过滤的画廊总数
 * @name getFilteredCount
 * @param text string $("p[class='ip']").text()
 * @return number 画廊总数
 */
export default function getFilteredTotal(text: string): number {
    try {
        const total = parseInt(
            text.match(/excluded ([0-9]+) gallery from this page/)[1]
        );

        return total;
    } catch {
        return 0;
    }
}