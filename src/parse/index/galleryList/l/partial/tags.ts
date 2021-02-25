/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tags } from "../../../../../types";

function toTags(tagArray: string[]): Tags {
    const tags: Tags = {};

    tagArray.forEach((tag) => {
        const split = tag.split(":");

        const namespace = split[0] === "" ? "other" : split[0];
        const tagName = split[1];
        
        if (tags[namespace] === undefined) tags[namespace] = [];
        tags[namespace].push(tagName);
    });

    return tags;
}

/**
 * 获取画廊的部分标签
 * 
 * @param $ Cheerio  标题 \<td\> 
 * @return Tags 部分标签
 */
export default ($: any): Tags => {
    const tagArray = $.find("a>div")
        .eq(1)
        .children()
        .map((_, el) => el.attribs.title)
        .get();
    return toTags(tagArray);
};