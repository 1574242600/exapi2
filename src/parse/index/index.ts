import cheerio from "cheerio";
import { IndexItemType, IndexData } from "@types";
import getResultCount from "./other/resultsTotal";
import getPageCount from "./other/pagesTotal";
import getFilteredCount from "./other/filteredTotal";
import parseGalleryList from "./galleryList/index";

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
        filter: getFilteredCount(p),
        list: parseGalleryList($, type)
    };
}