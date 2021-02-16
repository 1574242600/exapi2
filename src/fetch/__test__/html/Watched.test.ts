import * as Html from "../../get/html/index";

describe("测试 getWatchedHtml()", () => {
    it ("getWatchedHtml()", async () => {
        const text = await Html.getWatchedHtml();
        expect(text).toBe("/watched?page=0&inline_set=dm_l");
    });

    it ("getWatchedHtml(page, type)", async () => {
        const text = await Html.getWatchedHtml(2, "e");
        expect(text).toBe("/watched?page=1&inline_set=dm_e");
    });
});