import { fetchEX } from "../../fetch";
import { IndexItemType } from "../../../types";

/**
* 获取关注页面 html
 * @name getWatchedHtml
 * @param page number 页码 从1开始
 * @param type IndexItemType 条目类型
 * @return string
 */
export default (page = 1, type: IndexItemType = "l"): Promise<string> => {
    return fetchEX(`/watched?page=${ page - 1 }&inline_set=dm_${type}`)
        .then((response) => response.text());
};