import { fetchEX } from "../../fetch";
import { IndexItemType } from "../../../types";

/**
 * 获取搜索 html
 * @name getSearchHtml
 * @param queryString string get请求参数 字符串
 * @param type IndexItemType 条目类型
 * @return string
 */
//todo 写测试
export default (queryString: string, type: IndexItemType = "l"): Promise<string> => {
    return fetchEX(`/?${ queryString }&inline_set=dm_${type}`)
        .then((response) => response.text());
};