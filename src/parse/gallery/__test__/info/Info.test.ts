import fs from "fs";
import cheerio from "cheerio";
import * as Info from "../../info/index";
import { getDefaultTitle, getJPTitle } from "../../info/titles";

describe("解析画廊html", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    ///@ts-ignore
    const $ = cheerio.load(fs.readFileSync(global.__DATA_PATH__.html.gallery.m));

    it("获取 画廊封面url", () => {
        const result = Info.getCoverUrl($("#gleft"));
        expect(result.includes("https://ehgt.org/")).toBe(true);
    });

    describe("画廊标题", () => {
        const gd2 = $("#gd2");
        const [ defaultT, JPT ] = [
            "Asaba Hiromu",
            "あさば☆ひろむ"
        ];

        it("获取 画廊标题", () => {
            const results = Info.getTitles(gd2);
    
            expect(results[0] === defaultT).toBe(true);
            expect(results[1] === JPT).toBe(true);
        });

        it("获取 默认标题", () => {
            const result = getDefaultTitle(gd2);
    
            expect(result === defaultT).toBe(true);
        });

        it("获取 日文标题", () => {
            const result = getJPTitle(gd2);
    
            expect(result === JPT).toBe(true);
        });
       
    });

    it("获取 画廊类型", () => {
        const result = Info.getType($("#gd3"));

        expect(result).toBe("Non-H");
    });

    it("获取 画廊上传者昵称", () => {
        const result = Info.getUploaderName($("#gd3"));

        expect(result).toBe("qdddswedf");
    });
});