import Other from "../../get/Other";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
///@ts-ignore
const Client = global.Client;
const _Other = new Other(Client);

test("测试 Other.getFullImageUrl: 获取 重定向地址", async () => {
    const result = await _Other.getFullImageUrl("chenrui rip", 1, "awsl");
    expect(result).toBe("http://localhost:50000/ok");
});