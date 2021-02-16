import * as Html from "../../get/html/index";

test("测试 getMPVHtml(id, token)", async () => {
    const text = await Html.getMPVHtml(405464, "2a6761de61");
    expect(text).toBe("/mpv/405464/2a6761de61/");
});