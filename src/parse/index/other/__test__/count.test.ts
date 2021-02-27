import fs from "fs";
import cheerio from "cheerio";
import getResultCount from "../resultCount";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
///@ts-ignore
const $ = cheerio.load(fs.readFileSync(global.__DATA_PATH__.html.index.l));

describe("获取结果总数", () => {
    it("正确的文本参数", () => {
        const total = getResultCount("Showing 607,545 results");
        expect(total).toBe(607545);
    });

    it("错误的文本参数", () => {
        const total = getResultCount("S");
        expect(total).toBe(0);
    });
});
