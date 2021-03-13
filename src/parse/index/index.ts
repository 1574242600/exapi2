import cheerio from "cheerio";
import { IndexItemType, IndexData } from "../../types";
import getResultCount from "./other/resultCount";
import getPageCount from "./other/pageCount";
import getFilterCount from "./other/filterCount";
import getGalleryList from "./galleryList/index";

/**
 * 解析索引html
 * 
 * @param html string 索引html
 * @param type IndexItemType 画廊条目类型
 * @return IndexData 画廊索引数据
 */
export default function parseIndexHtml(html: string, type: IndexItemType = "l"): IndexData { 
    const $ = cheerio.load(html);
    const p = $("p[class='ip']").text();

    return {
        total: getResultCount(p),
        pages: getPageCount($),
        filter: getFilterCount(p),
        list: getGalleryList($, type)
    };
}