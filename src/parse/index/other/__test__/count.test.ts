import fs from "fs";
import cheerio from "cheerio";
import getResultCount from "../resultCount";
import getFilterCount from "../filterCount";
import getPageCount from "../pageCount";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
///@ts-ignore
const $ = cheerio.load(fs.readFileSync(global.__DATA_PATH__.html.index.l));

describe("解析索引html: 结果总数", () => {
    it("正确的文本参数", () => {
        const total = getResultCount("Showing 607,545 results");
        expect(total).toBe(607545);
    });

    it("错误的文本参数", () => {
        const total = getResultCount("S");
        expect(total).toBe(0);
    });
});

describe("解析索引html: 被过滤结果总数", () => {
    it("正确的文本参数", () => {
        const total = getFilterCount("Showing 536,350 results. Your filters excluded 1 gallery from this page");
        expect(total).toBe(1);
    });

    it("错误的文本参数", () => {
        const total = getFilterCount("S");
        expect(total).toBe(0);
    });
});

describe("解析索引html: 被过滤结果总数", () => {
    it("正确的参数", () => {
        const total = getPageCount($);
        expect(total).toBe(24302);
    });

    it("错误的参数", () => {
        const total = getPageCount(cheerio.load("<p></p>"));
        expect(total).toBe(0);
    });
});

