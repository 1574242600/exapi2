import fs from "fs";
import cheerio from "cheerio";
import published from "../../l/partial/published";
import beacon from "../../l/partial/beacon";
import title from "../../l/partial/title";
import type from "../../l/partial/type";
import rating from "../../l/partial/rating";
import bt from "../../l/partial/bt";
import cover from "../../l/partial/cover";
import uploader from "../../l/partial/uploader";

describe("解析 画廊列表类型L HTML", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    ///@ts-ignore
    const $ = cheerio.load(fs.readFileSync(global.__DATA_PATH__.html.index.l));

    it("解析 画廊 id 和 token", () => {
        const [ id, token ] = beacon(
            $("table[class='itg gltc']>tbody>tr")
                .eq(1)
                .find("td")
                .eq(2)
        );
    
        expect( id > 0).toBe(true);
        expect(/[a-z0-9]{10}/.test(token)).toBe(true);
    });
    
    it("解析 画廊类型", () => {
        const _type = type(
            $("table[class='itg gltc']>tbody>tr")
                .eq(1)
                .find("td")
                .eq(0)
        );
    
        expect(_type).toBe("Image Set");
    });
    
    it("解析 画廊标题", () => {
        const _title = title(
            $("table[class='itg gltc']>tbody>tr")
                .eq(1)
                .find("td")
                .eq(2)
        );
    
        expect(_title).toBe("[Artist] Shibekawa");
    });

    it("解析 画廊发布时间", () => {
        const _published = published(
            $("table[class='itg gltc']>tbody>tr")
                .eq(1)
                .find("td")
                .eq(1)
        );
    
        expect(_published).toBe(1614050100);
    });

    it("解析 画廊评分", () => {
        const _rating = rating(
            $("table[class='itg gltc']>tbody>tr")
                .eq(1)
                .find("td")
                .eq(1)
        );
    
        expect(_rating).toBe(4.5);
    });

    it("判断 画廊是否有种子", () => {
        const _bt = bt(
            $("table[class='itg gltc']>tbody>tr")
                .eq(1)
                .find("td")
                .eq(1)
        );
    
        expect(_bt).toBe(true);
    });

    it("解析 画廊封面url", () => {
        const _cover = cover(
            $("table[class='itg gltc']>tbody>tr")
                .eq(1)
                .find("td")
                .eq(1)
        );
    
        expect(_cover).toBe("https://ehgt.org/t/27/87/27875b5d97e37fb41533aa01e090f34d886407d5-897212-982-1200-jpg_250.jpg");
    });

    it("解析 画廊上传者", () => {
        const _uploader = uploader(
            $("table[class='itg gltc']>tbody>tr")
                .eq(1)
                .find("td")
                .eq(3)
        );
    
        expect(_uploader).toBe("Godboli");
    });
});