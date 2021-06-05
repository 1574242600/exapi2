/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import parseLGalleryItem from "./l/index";
import { IndexItemType, LGalleryItemInfo } from "../../../types";

const parseListClass = {
    l: parseLGalleryItem
};

/**
 * 解析索引html: 画廊列表信息
 * 
 * @param $ Cheerio.Root root
 * @param type valueOf<IndexItemTypeEnum> 画廊条目类型
 * @return LGalleryItemInfo 画廊列表信息
 */
export default function parseGalleryList($: any, type?: "l"): LGalleryItemInfo[];
export default function parseGalleryList($: any, type: IndexItemType = "l"): LGalleryItemInfo[] {
    const galleryList = $("table[class='itg gltc']>tbody>tr")
        .not((_, el) => {   //排除e-hentai的广告
            return el.children.length === 1;
        }) 
        .slice(1);

    return galleryList
        .map((_, el) => parseListClass[type]($(el)))
        .get();
}

