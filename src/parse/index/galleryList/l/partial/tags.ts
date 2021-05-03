/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tags } from "../../../../../types";
import { toTags } from "../../../../../utils/convert/index";

/**
 * 解析索引html: 画廊的部分标签
 * 
 * @param td Cheerio  标题 \<td\> 
 * @return Tags 部分标签
 */
export default (td: any): Tags => {
    const tagArray = td.find("a>div")
        .eq(1)
        .children()
        .map((_, el) => el.attribs.title)
        .get();
    return toTags(tagArray);
};