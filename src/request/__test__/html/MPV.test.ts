import Html from "../../get/Html";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
///@ts-ignore
const Client = global.Client;
const _Html = new Html(Client);

test("测试 Html.getMPVHtml(id, token)", async () => {
    const text = await _Html.getMPVHtml(405464, "2a6761de61");
    expect(text).toBe("/mpv/405464/2a6761de61/");
});