import fs from "fs";
import cheerio from "cheerio";
import getResultCount from "../resultsTotal";
import getFilterCount from "../filteredTotal";
import getPageCount from "../pagesTotal";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
///@ts-ignore
const $ = cheerio.load(fs.readFileSync(global.__DATA_PATH__.html.index.l));

describe("解析索引html: 获取结果总数", () => {
    it("正确的文本参数", () => {
        const result = getResultCount("Showing 607,545 results");
        expect(result).toBe(607545);
    });

    it("错误的文本参数", () => {
        const result = getResultCount("S");
        expect(result).toBe(0);
    });
});

describe("解析索引html: 获取被过滤结果总数", () => {
    it("正确的文本参数", () => {
        const result = getFilterCount("Showing 536,350 results. Your filters excluded 1 gallery from this page");
        expect(result).toBe(1);
    });

    it("错误的文本参数", () => {
        const result = getFilterCount("S");
        expect(result).toBe(0);
    });
});

describe("解析索引html: 获取被过滤结果总数", () => {
    it("正确的参数", () => {
        const result = getPageCount($);
        expect(result).toBe(24302);
    });

    it("错误的参数", () => {
        const result = getPageCount(cheerio.load("<p></p>"));
        expect(result).toBe(0);
    });
});

