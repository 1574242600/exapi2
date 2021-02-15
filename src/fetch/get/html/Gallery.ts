import { fetchEX } from "../../fetch";

/**
 * 获取画廊 html
 * @name getGalleryHtml
 * @param id number 画廊id
 * @param token string 画廊token
 * @param p number 页码  从1开始
 * @param row 4 | 10 | 20 | 40 画廊缩略图行数
 * @param type "ts_l" | "ts_m"  画廊缩略图类型 l 大图， m 长图
 * @return string
 */
export default (
    id: number,
    token: string,
    p = 1,  
    row : 4 | 10 | 20 | 40 = 4 ,
    type: "ts_l" | "ts_m" = "ts_l"
): Promise<string> => {
    return fetchEX(`/g/${id}/${token}/?p=${p - 1}&inline_set=tr_${row}&inline_set=${type}`)
        .then((response) => response.text());
};