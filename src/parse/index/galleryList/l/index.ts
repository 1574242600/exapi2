/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { LGalleryItemInfo } from "../../../../types";
import * as parsePartial from "./partial/index";

/**
 * 获取画廊条目信息
 * 
 * @param $ Cheerio  画廊条目 \<tr\> 
 * @return string 画廊条目信息
 */
export default function parseGalleryItem($: any): LGalleryItemInfo {
    const tr = $.children();

    const typeTd = tr.eq(0);
    const publishedTd = tr.eq(1);
    const titleTd = tr.eq(2);
    const uploaderTd = tr.eq(3);

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