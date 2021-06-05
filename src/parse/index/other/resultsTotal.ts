/**
 * 解析索引html: 获取当前搜索条件下的画廊总数
 * @name getResultsTotal
 * @param text string $("p[class='ip']").text()
 * @return number 画廊总数
 */
export default function getResultsTotal(text: string): number {
    try {
        const total = parseInt(
            text.match(/Showing ((?:[0-9],?)+) results/)[1]
                .replace(/,/, "")
        );

        return total;
    } catch {
        return 0;
    }
}