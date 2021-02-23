import fs from "fs";
import cheerio from "cheerio";
import beacon from "../beacon/index";

test("解析 画廊 id 和 token", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    ///@ts-ignore
    const $ = cheerio.load(fs.readFileSync(global.__DATA_PATH__.html.index.l));
    const [ id, token ] = beacon(
        $("table[class='itg gltc']>tbody>tr")
            .eq(1)
            .find("td").
            eq(2)
    );

    expect( id > 0).toBe(true);
    expect(/[a-z0-9]{10}/.test(token)).toBe(true);
});