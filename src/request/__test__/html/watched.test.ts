import Html from "../../get/Html";


describe("测试 Html.getWatchedHtml()", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    ///@ts-ignore
    const Client = global.Client;
    const _Html = new Html(Client);

    it("Html.getWatchedHtml()", async () => {
        const text = await _Html.getWatchedHtml();
        expect(text).toBe("/watched?page=0&inline_set=dm_l");
    });

    /*  it ("getWatchedHtml(page, type)", async () => {
        const text = await Html.getWatchedHtml(2, "e");
        expect(text).toBe("/watched?page=1&inline_set=dm_e");
    });
  */
});