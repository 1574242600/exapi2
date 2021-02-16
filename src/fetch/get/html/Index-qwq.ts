//文件名 只为卖萌
import { fetchEX } from "../../fetch";
import { IndexItemType } from "../../../types";

/**
 * 获取首页 html
 * @name getIndexHtml
 * @param page number 页码 从1开始
 * @param type IndexItemType 条目类型
 * @return string
 */
export default (page = 1, type: IndexItemType = "l"): Promise<string> => {
    return fetchEX(`/?page=${ page - 1 }&inline_set=dm_${type}`)
        .then((response) => response.text());
};