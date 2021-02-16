import * as Html from "../../get/html/index";

test("测试 getGalleryHtml(token, index)", async () => {
    const text = await Html.getImageHtml("886faa99f9","1510740-1");
    expect(text).toBe("/s/886faa99f9/1510740-1");
});