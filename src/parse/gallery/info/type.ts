/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { GalleryType } from "@types";
/**
 * 解析画廊html: 获取画廊类型
 * @name getType
 * @param gd3 Cheerio \<div id=\"gd3\"\> 
 * @return GalleryType
 */
export default function getType(gd3: any): GalleryType {
    const type = gd3.find("#gdc>div").text();

    return <GalleryType>type;
}