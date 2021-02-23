import fs from "fs";
import cheerio from "cheerio";
import type from "../type/index";

test("解析 画廊类型", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    ///@ts-ignore
    const $ = cheerio.load(fs.readFileSync(global.__DATA_PATH__.html.index.l));
    const _type = type(
        $("table[class='itg gltc']>tbody>tr")
            .eq(1)
            .find("td").
            eq(0)
    );

    expect(_type).toBe("Doujinshi");
});