import Client from "../Client";
import { ImageInfoResponse } from "../../types";

export default class Json {
    private Client: Client;

    constructor(Client: Client) {
        this.Client = Client;
    }

    /**
    * 获取图片信息 json   
    * @name getMPVImageJson
    * @param id number 画廊id
    * @param page number 图片索引 从1开始
    * @param mpvKey string 多页查看器token
    * @param imgKey string 图片token
    * @return Promise<ImageInfoResponse>
    */
    getMPVImageJson(
        id: number,
        page: number,
        imgKey: string,
        mpvKey: string
    ): Promise<ImageInfoResponse> {
        const postJson = {
            gid: id,
            imgkey: imgKey,
            method: "imagedispatch",
            mpvkey: mpvKey,
            page: page
        };

        return this.Client.requestEX("/api.php", {
            method: "POST",
            body: JSON.stringify(postJson),
            headers: { "Content-Type": "application/json" }
        }).then((response) => response.json());
    }
}