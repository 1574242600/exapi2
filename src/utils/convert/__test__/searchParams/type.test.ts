import { 
    GalleryType, 
    GalleryTypeValue,
    GalleryTypeMap
} from "../../../../types";

import toTypeString from "../../searchParams/type";

describe("测试 toTypeString", () => {
    it("toTypeString(types: number)", () => {
        expect(toTypeString(2)).toBe("f_cats=1021");
    });

    it("toTypeString(types: GalleryType[])", () => {
        const types: GalleryType[]  = [
            "Artist CG", 
            "Asian Porn", 
            "Cosplay", 
            "Doujinshi", 
            "Game CG", 
            "Image Set", 
            "Manga", 
            "Misc", 
            "Non-H", 
            "Western"
        ];

        types.forEach((type) => {
            expect(toTypeString([ type ])).toBe(`f_cats=${ 1023 - GalleryTypeMap[type] }`);
        });
    });

    it("toTypeString(types: GalleryTypeValue[])", () => {
        const values: GalleryTypeValue[]  = [1, 2, 8, 16, 512, 256, 32, 64, 128, 1];

        values.forEach((value) => {
            expect(toTypeString([ value ])).toBe(`f_cats=${ 1023 - value }`);
        });
    });
});