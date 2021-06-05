import fs from "fs";
import cheerio from "cheerio";
import * as Meta from "../../l/meta/index";

describe("解析画廊条目Html 类型L", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    ///@ts-ignore
    const $ = cheerio.load(fs.readFileSync(global.__DATA_PATH__.html.index.l));
    const td = $("table[class='itg gltc']>tbody>tr")
        .eq(1)
        .children();

    it("获取画廊 id 和 token", () => {
        const [id, token] = Meta.getBeacon(td.eq(2));

        expect(id > 0).toBe(true);
        expect(/[a-z0-9]{10}/.test(token)).toBe(true);
    });

    it("获取画廊类型", () => {
        const type = Meta.getType(td.eq(0));

        expect(type).toBe("Image Set");
    });

    it("获取画廊标题", () => {
        const title = Meta.getTitle(td.eq(2));

        expect(title).toBe("[Artist] Shibekawa");
    });

    it("获取画廊发布时间", () => {
        const published = Meta.getPublished(td.eq(1));

        expect(published).toBe(1614050100);
    });

    it("获取画廊评分", () => {
        const rating = Meta.getRating(td.eq(1));

        expect(rating).toBe(4.5);
    });

    it("判断画廊是否有种子", () => {
        const bt = Meta.isHaveBt(td.eq(1));

        expect(bt).toBe(true);
    });

    it("获取画廊封面url", () => {
        const coverUrl = Meta.getCoverUrl(td.eq(1));

        expect(coverUrl.includes("https://ehgt.org/")).toBe(true);
    });

    it("获取画廊上传者", () => {
        const uploader = Meta.getUploader(td.eq(3));

        expect(uploader).toBe("Godboli");
    });

    it("获取画廊页数", () => {
        const pages = Meta.getPages(td.eq(3));

        expect(pages).toBe(42);
    });

    it("获取画廊部分标签", () => {
        const tags = Meta.getTags(td.eq(2));

        const namespaces = Object.keys(tags);

        expect(namespaces.length > 0).toBe(true);
        expect(tags[namespaces[0]] instanceof Array).toBe(true);
        expect(tags[namespaces[0]].length > 0).toBe(true);
    });
});