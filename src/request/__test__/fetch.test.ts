jest.setTimeout(10000);

describe("测试 fetch", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    ///@ts-ignore
    const Client = global.Client;

    it("Client.request('https://e-hentai.org') ", async () => {
        const response = await Client.request("https://e-hentai.org");
        const text = await response.text();
        expect(text.length > 1000).toBe(true);
    }); 

    it("Client.request('https://exhentai.org') ", async () => {
        try {
            const response = await Client.request("https://exhentai.org", { follow: 0 });
            expect(response.status !== 200).toBe(true);
        } catch(e) {
            expect(/maximum redirect reached/.test(e.message)).toBe(true);
        }
    }); 

    it("Client.requestEx('/') ", async () => {
        const text = await Client.requestEX("/").then(response => response.text());
        expect(text).toBe("ok");
    }); 

});