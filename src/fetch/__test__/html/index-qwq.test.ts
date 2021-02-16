import * as Html from "../../get/html/index";

describe("测试 getIndexHtml()", () => {
    it ("getIndexHtml()", async () => {
        const text = await Html.getIndexHtml();
        expect(text).toBe("/?page=0");
    });

    it ("getIndexHtml(page)", async () => {
        const text = await Html.getIndexHtml(2);
        expect(text).toBe("/?page=1");
    });
});