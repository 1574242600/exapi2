import { fetchEX } from "../../fetch";

/**
 * 获取图片浏览页面 html
 * @name getImageHtml
 * @param token string 画廊token
 * @param index string \`${画廊id}-${图片索引 从1开始}\` 
 * @return string
 */
export default (token: string, index: string): Promise<string> => {
    return fetchEX(`/s/${token}/${index}`)
        .then((response) => response.text());
};