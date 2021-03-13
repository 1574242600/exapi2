import fs from "fs";
import parseIndexHtml from "../index";



describe("解析索引html", () => {
    it("类型L", () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        ///@ts-ignore
        const html = fs.readFileSync(global.__DATA_PATH__.html.index.l).toString();
        expect(parseIndexHtml(html, "l")).toMatchSnapshot();
    });
});