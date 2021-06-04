import fs from "fs";
import cheerio from "cheerio";
import * as Partial from "../../l/partial/index";

describe("解析索引html: 画廊列表 类型L", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    ///@ts-ignore
    const $ = cheerio.load(fs.readFileSync(global.__DATA_PATH__.html.index.l));
    const td = $("table[class='itg gltc']>tbody>tr")
        .eq(1)
        .children();

    it("画廊 id 和 token", () => {
        const [id, token] = Partial.beacon(td.eq(2));

        expect(id > 0).toBe(true);
        expect(/[a-z0-9]{10}/.test(token)).toBe(true);
    });

    it("画廊类型", () => {
        const _type = Partial.type(td.eq(0));

        expect(_type).toBe("Image Set");
    });

    it("画廊标题", () => {
        const _title = Partial.title(td.eq(2));

        expect(_title).toBe("[Artist] Shibekawa");
    });

    it("画廊发布时间", () => {
        const _published = Partial.published(td.eq(1));

        expect(_published).toBe(1614050100);
    });

    it("画廊评分", () => {
        const _rating = Partial.rating(td.eq(1));

        expect(_rating).toBe(4.5);
    });

    it("判断 画廊是否有种子", () => {
        const _bt = Partial.bt(td.eq(1));

        expect(_bt).toBe(true);
    });

    it("画廊封面url", () => {
        const _cover = Partial.cover(td.eq(1));

        expect(_cover).toBe("https://ehgt.org/t/27/87/27875b5d97e37fb41533aa01e090f34d886407d5-897212-982-1200-jpg_250.jpg");
    });

    it("画廊上传者", () => {
        const _uploader = Partial.uploader(td.eq(3));

        expect(_uploader).toBe("Godboli");
    });

    it("画廊页数", () => {
        const _pages = Partial.pages(td.eq(3));

        expect(_pages).toBe(42);
    });

    it("画廊部分标签", () => {
        const _tags = Partial.tags(td.eq(2));

        const namespaces = Object.keys(_tags);

        expect(namespaces.length > 0).toBe(true);
        expect(_tags[namespaces[0]] instanceof Array).toBe(true);
        expect(_tags[namespaces[0]].length > 0).toBe(true);
    });
});