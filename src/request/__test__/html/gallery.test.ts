import Html from "../../get/Html";

describe("测试 Html.getGalleryHtml()", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    ///@ts-ignore
    const Client = global.Client;
    const _Html = new Html(Client);

    it("Html.getGalleryHtml(id, token)", async () => {
        const result = await _Html.getGalleryHtml(627844, "39dbc33ad8");
        expect(result).toBe("/g/627844/39dbc33ad8/?p=0&inline_set=tr_4-ts_l");
    });

    it("Html.getGalleryHtml(id, token, p)", async () => {
        const result = await _Html.getGalleryHtml(1407717, "b04cb3fcd2", 2);
        expect(result).toBe("/g/1407717/b04cb3fcd2/?p=1&inline_set=tr_4-ts_l");
    });

    it("Html.getGalleryHtml(id, token, p, row)", async () => {
        const result = await _Html.getGalleryHtml(627844, "39dbc33ad8", 1, 10);
        expect(result).toBe("/g/627844/39dbc33ad8/?p=0&inline_set=tr_10-ts_l");
    });

    it("Html.getGalleryHtml(id, token, p, row, type)", async () => {
        const result = await _Html.getGalleryHtml(627844, "39dbc33ad8", 1, 4, "m");
        expect(result).toBe("/g/627844/39dbc33ad8/?p=0&inline_set=tr_4-ts_m");
    });
});