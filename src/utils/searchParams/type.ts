import { 
    GalleryType, 
    GalleryTypeValue, 
    GalleryTypeMap 
} from "../../types";


export default function toTypeString(types: number): string;
export default function toTypeString(types: GalleryType[]): string;
export default function toTypeString(types: GalleryTypeValue[]): string;

export default function toTypeString(types: GalleryType[] | GalleryTypeValue[] | number): string {
    let total = 1023;

    if (typeof types === "number") {
        total -= <number>types;
    }

    if (types instanceof Array && typeof types[0] === "string") {
        (<GalleryType[]>types).forEach((type) => {
            total -= GalleryTypeMap[type];
        });
    }

    if (types instanceof Array && typeof types[0] === "number") {
        (<GalleryTypeValue[]>types).forEach((value) => {
            total -= value;
        });
    }
    
    return `f_cats=${total}`;
}
