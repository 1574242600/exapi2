import * as Html from "../../get/html/index";

describe("测试 getIndexHtml()", () => {
    it ("getIndexHtml()", async () => {
        const text = await Html.getIndexHtml();
        expect(text).toBe("/?page=0&inline_set=dm_l");
    });

    it ("getIndexHtml(page)", async () => {
        const text = await Html.getIndexHtml(2);
        expect(text).toBe("/?page=1&inline_set=dm_l");
    });

    it ("getIndexHtml(page, type)", async () => {
        const text = await Html.getIndexHtml(2, "e");
        expect(text).toBe("/?page=1&inline_set=dm_e");
    });
});