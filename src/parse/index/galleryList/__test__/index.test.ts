import fs from "fs";
import cheerio from "cheerio";
import parseGalleryList from "../index";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
///@ts-ignore
const $ = cheerio.load(fs.readFileSync(global.__DATA_PATH__.html.index.l));

describe("解析画廊列表", () => {
    it("类型L 解析", () => {
        expect(parseGalleryList($)).toMatchSnapshot();
    });
});