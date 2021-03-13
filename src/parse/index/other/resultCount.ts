/**
 * 解析索引html: 当前搜索条件下的画廊总数
 * 
 * @param text string $("p[class='ip']").text()
 * @return number 画廊总数
 */
export default (text: string): number => {
    try {
        const total = parseInt(
            text.match(/Showing ((?:[0-9],?)+) results/)[1]
                .replace(/,/, "")
        );

        return total;
    } catch {
        return 0;
    }
};