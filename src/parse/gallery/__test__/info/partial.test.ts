import fs from "fs";
import cheerio from "cheerio";
import * as Info from "../../info/index";

describe("解析画廊html", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    ///@ts-ignore
    const $ = cheerio.load(fs.readFileSync(global.__DATA_PATH__.html.gallery.m));

    it("获取 画廊封面url", () => {
        const coverUrl = Info.getCoverUrl($("#gleft"));
        expect(coverUrl.includes("https://ehgt.org/")).toBe(true);
    });

    it("获取 画廊标题", () => {
        const title = Info.getTitle($("#gd2"));

        expect(title[0].includes("Asaba Hiromu")).toBe(true);
        expect(title[1].includes("あさば☆ひろむ")).toBe(true);
    });

    it("获取 画廊类型", () => {
        const type = Info.getType($("#gd3"));

        expect(type).toBe("Non-H");
    });
});