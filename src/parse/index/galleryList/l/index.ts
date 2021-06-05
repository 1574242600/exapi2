/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { LGalleryItemInfo } from "../../../../types";
import * as parsePartial from "./meta/index";

/**
 * 解析L类型画廊索引Html: 解析画廊条目信息
 * 
 * @param tr Cheerio  画廊条目 \<tr\> 
 * @return string 画廊条目信息
 */
export default function parseGalleryItem(tr: any): LGalleryItemInfo {
    const trChildren = tr.children();

    const typeTd = trChildren.eq(0);
    const publishedTd = trChildren.eq(1);
    const titleTd = trChildren.eq(2);
    const uploaderTd = trChildren.eq(3);

    const [ id, token ] = parsePartial.getBeacon(titleTd);

    return {
        id,
        token,
        type: parsePartial.getType(typeTd),
        tags: parsePartial.getTags(titleTd),
        title: parsePartial.getTitle(titleTd),
        cover: parsePartial.getCoverUrl(publishedTd),
        haveBt: parsePartial.isHaveBt(publishedTd),
        published: parsePartial.getPublished(publishedTd),
        rating: parsePartial.getRating(publishedTd),
        pages: parsePartial.getPages(uploaderTd),
        uploader: parsePartial.getUploader(uploaderTd),
    };
}