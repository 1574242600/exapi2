import fetch, { fetchEX } from "../fetch";

jest.setTimeout(10000);

describe("测试 fetch", () => {

    it("fetch('https://e-hentai.org') ", async () => {
        const response = await fetch("https://e-hentai.org");
        const text = await response.text();
        expect(text.length > 1000).toBe(true);
    }); 

    it("fetch('https://exhentai.org') ", async () => {
        try {
            const response = await fetch("https://exhentai.org", { follow: 0 });
            expect(response.status !== 200).toBe(true);
        } catch(e) {
            expect(/maximum redirect reached/.test(e.message)).toBe(true);
        }
    }); 

    it("fetchEx('/') ", async () => {
        const text = await fetchEX("/").then(response => response.text());
        expect(text).toBe("ok");
    }); 

});