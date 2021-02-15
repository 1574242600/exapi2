//文件名 只为卖萌
import { fetchEX } from "../../fetch";

/**
 * 获取首页 html
 * @name getIndexHtml
 * @param page number 页码 从1开始
 * @return string
 */
export default (page = 0): Promise<string> => {
    return fetchEX(`/?page=${ page - 1 }`)
        .then((response) => response.text());
};