import fs from "fs";
import cheerio from "cheerio";
import * as Info from "../../l/info/index";

describe("解析画廊条目Html 类型L", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    ///@ts-ignore
    const $ = cheerio.load(fs.readFileSync(global.__DATA_PATH__.html.index.l));
    const td = $("table[class='itg gltc']>tbody>tr")
        .eq(1)
        .children();

    it("获取画廊 id 和 token", () => {
        const result = Info.getBeacon(td.eq(2));

        expect(result.id > 0).toBe(true);
        expect(/[a-z0-9]{10}/.test(result.token)).toBe(true);
    });

    it("获取 画廊类型", () => {
        const result = Info.getType(td.eq(0));

        expect(result).toBe("Image Set");
    });

    it("获取 画廊标题", () => {
        const result = Info.getTitle(td.eq(2));

        expect(result).toBe("[Artist] Shibekawa");
    });

    it("获取 画廊发布时间", () => {
        const result = Info.getPosted(td.eq(1));

        expect(result).toBe(1614050100);
    });

    it("获取 画廊评分", () => {
        const result = Info.getRating(td.eq(1));

        expect(result).toBe(4.5);
    });

    it("判断 画廊是否有种子", () => {
        const result = Info.isHaveBt(td.eq(1));

        expect(result).toBe(true);
    });

    it("获取 画廊封面url", () => {
        const result = Info.getCoverUrl(td.eq(1));

        expect(result.includes("https://ehgt.org/")).toBe(true);
    });

    it("获取 画廊上传者", () => {
        const result = Info.getUploader(td.eq(3));

        expect(result).toBe("Godboli");
    });

    it("获取 画廊总页数", () => {
        const result = Info.getLength(td.eq(3));

        expect(result).toBe(42);
    });

    it("获取 画廊部分标签", () => {
        const result = Info.getTags(td.eq(2));

        const namespaces = Object.keys(tags);

        expect(namespaces.length > 0).toBe(true);
        expect(result[namespaces[0]] instanceof Array).toBe(true);
        expect(result[namespaces[0]].length > 0).toBe(true);
    });
});