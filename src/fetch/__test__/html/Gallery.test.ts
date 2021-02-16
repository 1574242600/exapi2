import * as Html from "../../get/html/index";

describe("测试 getGalleryHtml()", () => {
    it("getGalleryHtml(id, token)", async () => {
        const text = await Html.getGalleryHtml(627844, "39dbc33ad8");
        expect(text).toBe("/g/627844/39dbc33ad8/?p=0&inline_set=tr_4&inline_set=ts_l");
    });

    it("getGalleryHtml(id, token, p)", async () => {
        const text = await Html.getGalleryHtml(1407717, "b04cb3fcd2", 2);
        expect(text).toBe("/g/1407717/b04cb3fcd2/?p=1&inline_set=tr_4&inline_set=ts_l");
    });

    it("getGalleryHtml(id, token, p, row)", async () => {
        const text = await Html.getGalleryHtml(627844, "39dbc33ad8", 1, 4);
        expect(text).toBe("/g/627844/39dbc33ad8/?p=0&inline_set=tr_4&inline_set=ts_l");
    });

    it("getGalleryHtml(id, token, p, row, type)", async () => {
        const text = await Html.getGalleryHtml(627844, "39dbc33ad8", 1, 4, "ts_m");
        expect(text).toBe("/g/627844/39dbc33ad8/?p=0&inline_set=tr_4&inline_set=ts_m");
    });
});