import fs from "fs";
import cheerio from "cheerio";
import * as Partial from "../../info/partial/index";

describe("解析画廊html", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    ///@ts-ignore
    const $ = cheerio.load(fs.readFileSync(global.__DATA_PATH__.html.gallery.m));
    
    it("画廊封面url", () => {
        const coverUrl = Partial.getCoverUrl($("#gleft"));
        expect(coverUrl.includes("https://ehgt.org/")).toBe(true);
    });
});