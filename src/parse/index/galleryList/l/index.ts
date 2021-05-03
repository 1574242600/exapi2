/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { LGalleryItemInfo } from "../../../../types";
import * as parsePartial from "./partial/index";

/**
 * 解析索引html: 画廊条目信息
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

    const [ id, token ] = parsePartial.beacon(titleTd);

    return {
        id,
        token,
        type: parsePartial.type(typeTd),
        tags: parsePartial.tags(titleTd),
        title: parsePartial.title(titleTd),
        cover: parsePartial.cover(publishedTd),
        bt: parsePartial.bt(publishedTd),
        published: parsePartial.published(publishedTd),
        rating: parsePartial.rating(publishedTd),
        pages: parsePartial.pages(uploaderTd),
        uploader: parsePartial.uploader(uploaderTd),
    };
}