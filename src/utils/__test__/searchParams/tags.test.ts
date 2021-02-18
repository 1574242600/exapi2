import { SearchParams } from "../../../types";
import toTagsString from "../../searchParams/tags";

describe("测试 toTagsString()", () => {
    it("单个tagNamespace 单个tag(非多个单词组成)", () => {
        const tags: SearchParams["tags"] = {
            female: ["lolicon"] 
        };
    
        expect(toTagsString(tags)).toBe("f%3A%22lolicon%24%22");
    });

    it("单个tagNamespace 单个tag(多个单词组成)", () => {
        const tags: SearchParams["tags"] = {
            female: ["sex toys"] 
        };
    
        expect(toTagsString(tags)).toBe("f%3A%22sex+toys%24%22");
    });

    it("多个tagNamespace 单个tag(非多个单词组成)", () => {
        const tags: SearchParams["tags"] = {
            female: ["lolicon"],
            artist: ["ccp"]
        };
    
        expect(toTagsString(tags)).toBe("f%3A%22lolicon%24%22+a%3A%22ccp%24%22");
    });

    it("多个tagNamespace 单个tag(多个单词组成)", () => {
        const tags: SearchParams["tags"] = {
            female: ["sex toys"],
            artist: ["shouji ayumu"]
        };
    
        expect(toTagsString(tags)).toBe("f%3A%22sex+toys%24%22+a%3A%22shouji+ayumu%24%22");
    });

    it("多个tagNamespace 多个tag(混合)", () => {
        const tags: SearchParams["tags"] = {
            female: ["sex toys", "lolicon"],
            artist: ["shouji ayumu", "ccp"]
        };
    
        expect(toTagsString(tags)).toBe("f%3A%22sex+toys%24%22+f%3A%22lolicon%24%22+a%3A%22shouji+ayumu%24%22+a%3A%22ccp%24%22");
    });

    it("other 多个tag(混合)", () => {
        const tags: SearchParams["tags"] = {
            other: ["full color", "test"]
        };
    
        expect(toTagsString(tags)).toBe("%22full+color%24%22+%22test%24%22");
    });
});