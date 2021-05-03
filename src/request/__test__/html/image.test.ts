import Html from "../../get/Html";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
///@ts-ignore
const Client = global.Client;
const _Html = new Html(Client);

test("测试 Html.getImageHtml(token, index)", async () => {
    const text = await _Html.getImageHtml("886faa99f9","1510740-1");
    expect(text).toBe("/s/886faa99f9/1510740-1");
});