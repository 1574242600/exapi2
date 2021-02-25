/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tags } from "../../../../../types";
import { toTags } from "../../../../../utils/convert/index";

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