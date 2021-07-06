import { GalleryType, GalleryTypeValue } from "@types";

export const enum IndexItemTypeEnum {
    COMPACT = "l"
}

export const enum ThumbnailTypeEnum {
    NORMAL = "m",
    LARGE = "l"
}

export const GalleryTypeMap: Record<GalleryType, GalleryTypeValue> = {
    "Doujinshi": 2,
    "Manga": 4,
    "Artist CG": 8,
    "Game CG": 16,
    "Western": 512,
    "Non-H": 256,
    "Image Set": 32,
    "Cosplay": 64,
    "Asian Porn": 128,
    "Misc": 1
};