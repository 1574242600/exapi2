import { fetchEX } from "../../fetch";

/**
 * 获取多页查看器 html
 * @name getMPVHtml
 * @param id number 画廊id
 * @param token string 画廊token
 * @return string
 */
export default (
    id: number,
    token: string,
): Promise<string> => {
    return fetchEX(`/MPV/${id}/${token}/`)
        .then((response) => response.text());
};