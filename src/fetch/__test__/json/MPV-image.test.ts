import * as Json from "../../get/json/index";

test("测试 getMPVImageJson()", async () => {
    const data = await Json.getMPVImageJson(2018, 3, "owo", "qwq"); 
    expect(data.s).toBe(1);
});