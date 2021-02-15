import { fetchEX } from "../../fetch";
import { imageInfoResponse } from "../../../types";

/**
 * 获取图片信息 json   
 * @name getMPVImage
 * @param id number 画廊id
 * @param page number 图片索引 从1开始
 * @param mpvKey string 多页查看器token
 * @param imgKey string 图片token
 */
export default (
    id: number,
    page: number,
    imgKey: string,
    mpvKey: string
): Promise<imageInfoResponse> => {
    const postJson = {
        gid: id,
        imgkey: imgKey,
        method: "imagedispatch",
        mpvkey: mpvKey,
        page: page
    };

    return fetchEX("/api.php", {
        method: "POST",
        body: JSON.stringify(postJson),
        headers: { "Content-Type": "application/json" }
    }).then((response) => response.json());
};
