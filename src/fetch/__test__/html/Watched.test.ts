import * as Html from "../../get/html/index";

describe("测试 getWatchedHtml()", () => {
    it ("getWatchedHtml()", async () => {
        const text = await Html.getWatchedHtml();
        expect(text).toBe("/watched?page=0");
    });

    it ("getWatchedHtml(page)", async () => {
        const text = await Html.getWatchedHtml(2);
        expect(text).toBe("/watched?page=1");
    });
});