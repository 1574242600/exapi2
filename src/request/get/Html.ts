import Client from "../Client";
import { IndexItemType, ThumbnailType } from "../../types";

export default class Html {
    private Client: Client;

    constructor(Client: Client) {
        this.Client = Client;
    }

    /**
    * 获取画廊 html
    * @name getGalleryHtml
    * @param id number 画廊id
    * @param token string 画廊token
    * @param p number 页码  从1开始
    * @param row 4 | 10 | 20 | 40 画廊缩略图行数
    * @param type "ts_l" | "ts_m"  画廊缩略图类型 l 大图， m 长图
    * @return Promise\<string\>
    */
    getGalleryHtml(
        id: number,
        token: string,
        p = 1,
        row: 4 | 10 | 20 | 40 = 4,
        type: ThumbnailType = "l"
    ): Promise<string> {

        return this.Client.requestEX(`/g/${id}/${token}/?p=${p - 1}&inline_set=tr_${row}-ts_${type}`)
            .then((response) => response.text());
    }

    /**
    * 获取图片浏览页面 html
    * @name getImageHtml
    * @param token string 画廊token
    * @param index string \`${画廊id}-${图片索引 从1开始}\` 
    * @return Promise\<string\>
    */
    getImageHtml(token: string, index: string): Promise<string> {
        return this.Client.requestEX(`/s/${token}/${index}`)
            .then((response) => response.text());
    }



    /**
     * 获取首页 html
     * @name getIndexHtml
     * @param page number 页码 从1开始
     * @param type IndexItemType 条目类型
     * @return Promise\<string\>
     */
    getIndexHtml(page = 1, type: IndexItemType = "l"): Promise<string> {
        return this.Client.requestEX(`/?page=${page - 1}&inline_set=dm_${type}`)
            .then((response) => response.text());
    }

    /**
    * 获取多页查看器 html
    * @name getMPVHtml
    * @param id number 画廊id
    * @param token string 画廊token
    * @return Promise\<string\>
    */
    getMPVHtml(id: number, token: string): Promise<string> {
        return this.Client.requestEX(`/mpv/${id}/${token}/`)
            .then((response) => response.text());
    }

    /**
    * 获取搜索 html
    * @name getSearchHtml
    * @param queryString string get请求参数 字符串
    * @param type IndexItemType 条目类型
    * @return Promise\<string\>
    */ 
    getSearchHtml(queryString: string, type: IndexItemType = "l"): Promise<string> { //todo 写测试
        return this.Client.requestEX(`/?${queryString}&inline_set=dm_${type}`)
            .then((response) => response.text());
    }

    /**
    * 获取关注页面 html
    * @name getWatchedHtml
    * @param page number 页码 从1开始
    * @param type IndexItemType 条目类型
    * @return Promise\<string\>
    */
    getWatchedHtml(page = 1, type: IndexItemType = "l"): Promise<string> {
        return this.Client.requestEX(`/watched?page=${ page - 1 }&inline_set=dm_${type}`)
            .then((response) => response.text());
    }
}