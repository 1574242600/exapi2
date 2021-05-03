import Json from "../../get/Json";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
///@ts-ignore
const Client = global.Client;
const _Json = new Json(Client);

test("测试 Json.getMPVImageJson()", async () => {
    const data = await _Json.getMPVImageJson(2018, 3, "owo", "qwq"); 
    expect(data.s).toBe(1);
});