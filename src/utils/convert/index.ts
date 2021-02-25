import { SearchParams, FileSearchParams } from "../../types";
import * as SP from "./searchParams/index";

export function toSearchParamsString(searchParams: SearchParams): string;
export function toSearchParamsString(searchParams: FileSearchParams): string;
export function toSearchParamsString(searchParams: SearchParams | FileSearchParams);
export function toSearchParamsString(searchParams: SearchParams | FileSearchParams): string {
    const query: string[] = [];

    if (typeof searchParams.text === "string" && (searchParams.text.trim()).length > 0 ) {
        query.push(`f_search=${encodeURIComponent(searchParams.text)}`);
    }

    if (searchParams.tags !== undefined) {
        const tagsString = SP.toTagsString(searchParams.tags);

        if (typeof query[0]  === "string") {
            query[0] += `+${ tagsString }`;
        } else {
            query.push(`f_search=${ tagsString }`);
        }
    }

    if (searchParams.type !== undefined) {
        query.push(SP.toTypeString(searchParams.type));
    }

    if (searchParams.advanced !== undefined) {
        query.push(SP.toAdvancedString(searchParams.advanced));
    }

    if (typeof (<FileSearchParams>searchParams).hash === "string") {
        query.push(`f_shash=${ (<FileSearchParams>searchParams).hash }`);

        const { from, similar, covers, exp } = <FileSearchParams>searchParams;
        
        query.push(SP.toFileString(from, similar, covers, exp));
    }

    return query
        .filter((paramString) =>  paramString !== "")
        .join("&");
}

export function toStringTime(timeString: string): number {
    return  (new Date(timeString + "Z")).getTime() / 1000;
}

/** 
 * 把评分css样式转换到大致的评分
*/
export function toRating(style: string): number {
    const px = [];
    let flag = 0;

    for (let i = 0; i < style.length; i++) {
        if (flag === 2) break;
        const now = style[i];
        const next = style[i + 1];

        if (now + next === "px") {
            const l = [];
            if (!isNaN(Number(style[i - 2]))) {
                l[0] = style[i - 2];
            }

            if (!isNaN(Number(style[i - 1]))) {
                l[1] = style[i - 1];
            }
            px[flag] = Number(l.join(""));
            flag++;
        }
    }

    if (isNaN(px[0])) return 5;

    const value = px[1] === 21 ? 0.5 : 0;
    return 5 - value - px[0] / 16;
}