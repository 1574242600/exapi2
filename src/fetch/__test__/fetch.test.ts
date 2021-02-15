import fetch, { fetchEX } from "../fetch";
import { setCookies } from "../config";

jest.setTimeout(10000);

describe("测试 fetch", () => {

    beforeEach(() => {
        setCookies({
            "ipb_member_id": 3512590,
            "ipb_pass_hash": "cfb712ea2633f9894c5dae23146f78d0",
            "igneous": "322abe39d"
        }); //公共账号   来自https://ex.acg.uy/
    });

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
        expect(text.length > 1000).toBe(true);
    }); 

});