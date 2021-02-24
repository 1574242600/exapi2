/** 
 * 把评分css样式转换到大致的评分
*/
export default function toRating(style: string): number {
    const px = [];
    let flag = 0;

    for (let i = 0; i < style.length; i++) {
        if (flag === 2) break;
        const now = style[i];
        const next = style[i + 1];

        if (now + next === "px") {
            const l = [];
            if (!isNaN(Number(style[i - 2]))) {
                l[0] = style[i - 2];
            }

            if (!isNaN(Number(style[i - 1]))) {
                l[1] = style[i - 1];
            }
            px[flag] = Number(l.join(""));
            flag++;
        }
    }

    if (isNaN(px[0])) return 5;

    const value = px[1] === 21 ? 0.5 : 0;
    return 5 - value - px[0] / 16;
}