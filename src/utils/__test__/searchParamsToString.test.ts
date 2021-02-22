import { SearchParams, FileSearchParams } from "../../types";
import toSearchParamsString from "../searchParamsToString";


describe("测试 toSearchParamsString()", () => {

    it("当只有 text 时", () => {
        const params = { text: "winnie 微拟 @ クマのプーさん" };
        const params2 = { text: "winnie" };

        const query = toSearchParamsString(params);
        const query2 = toSearchParamsString(params2);

        expect(query2).toBe("f_search=winnie");
        expect(query).toBe("f_search=winnie%20%E5%BE%AE%E6%8B%9F%20%40%20%E3%82%AF%E3%83%9E%E3%81%AE%E3%83%97%E3%83%BC%E3%81%95%E3%82%93");
    });

    it("当只有 tags 时", () => {
        const params = {
            tags: {
                female: ["shouji ayumu"],
                artist: ["test"]
            }
        };

        const query = toSearchParamsString(params);
        expect(query).toBe("f_search=f%3A%22shouji+ayumu%24%22+a%3A%22test%24%22");
    });

    it("当只有 tags 和 text 时", () => {
        const params = {
            text: "LOL XD",
            tags: {
                female: ["test"],
                artist: ["shouji ayumu"]
            }
        };

        const query = toSearchParamsString(params);
        expect(query).toBe("f_search=LOL%20XD+f%3A%22test%24%22+a%3A%22shouji+ayumu%24%22");
    });

    it("所有, SearchParams", () => {
        const params: SearchParams = {
            text: "LOL XD",
            tags: {
                female: ["test"],
                artist: ["shouji ayumu"]
            },
            type: ["Doujinshi"],
            advanced: {
                enable: {
                    name: true,
                    tags: true,
                    desc: true,
                    torr: true,
                    dt1: true,
                    dt2: true
                },
                show: {
                    torr: true,
                    delete: true
                },
                rating: 2,
                between: [1, 2],
                disableFilter: {
                    lang: true,
                    uploader: true,
                    tags: true
                }
            }
        };

        const query = toSearchParamsString(params);
        expect(query).toBe("f_search=LOL%20XD+f%3A%22test%24%22+a%3A%22shouji+ayumu%24%22&f_cats=1021&advsearch=1&f_sname=on&f_stags=on&f_sdesc=on&f_storr=on&f_sdt1=on&f_sdt2=on&f_sto=on&f_sh=on&f_sr=on&f_srdd=2&f_sp=on&f_spf=1&f_spt=2&f_sfl=on&f_sfu=on&f_sft=on");
    });

    it("所有, FileSearchParams", () => {
        const params: FileSearchParams = {
            hash: "326efeeac48006c9e6638eec76e516d4f81b79a9",
            text: "无职",
            tags: {
                female: ["not found"],
                artist: ["404"]
            },
            from: "000.jpg",
            similar: true,
            covers: true,
            exp: true
        };

        const query = toSearchParamsString(params);
        expect(query).toBe("f_search=%E6%97%A0%E8%81%8C+f%3A%22not+found%24%22+a%3A%22404%24%22&f_shash=326efeeac48006c9e6638eec76e516d4f81b79a9&fs_from=000.jpg&fs_similar=1&fs_exp=1&fs_covers=1");
    });
});