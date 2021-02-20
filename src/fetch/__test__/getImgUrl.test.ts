import getImageUrl from "../get/imageUrl";

test("获取 重定向地址", async () => {
    const url = await getImageUrl("chenrui rip", 1, "awsl");
    expect(url).toBe("http://localhost:50000/ok");
});