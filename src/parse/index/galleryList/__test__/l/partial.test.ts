import fs from "fs";
import cheerio from "cheerio";
import beacon from "../../l/partial/beacon";
import title from "../../l/partial/title";
import type from "../../l/partial/type";

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

});