import fs from "fs";
import cheerio from "cheerio";
import parseGalleryItem from "../../l/index";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
///@ts-ignore
const $ = cheerio.load(fs.readFileSync(global.__DATA_PATH__.html.index.l));

const tr = $("table[class='itg gltc']>tbody>tr").slice(1).eq(0);

test("解析画廊条目信息Html 类型L", () => {
    const info = parseGalleryItem(tr);
    expect(info).toMatchSnapshot();
});