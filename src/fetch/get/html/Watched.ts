import { fetchEX } from "../../fetch";

/**
* 获取关注页面 html
 * @name getWatchedHtml
 * @param page number 页码 从1开始
 * @return string
 */
export default (page = 1): Promise<string> => {
    return fetchEX(`/watched?page=${ page - 1 }`)
        .then((response) => response.text());
};