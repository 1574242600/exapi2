import Html from "../../get/Html";

describe("测试 Html.getIndexHtml()", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    ///@ts-ignore
    const Client = global.Client;
    const _Html = new Html(Client);

    it("Html.getIndexHtml()", async () => {
        const text = await _Html.getIndexHtml();
        expect(text).toBe("/?page=0&inline_set=dm_l");
    });

    it("Html.getIndexHtml(page)", async () => {
        const text = await _Html.getIndexHtml(2);
        expect(text).toBe("/?page=1&inline_set=dm_l");
    });

    /* it ("getIndexHtml(page, type)", async () => {
        const text = await Html.getIndexHtml(2, "e");
        expect(text).toBe("/?page=1&inline_set=dm_e");
    }); */
});