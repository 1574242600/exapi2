import { SearchParams, FileSearchParams } from "../types";
import * as SP from "./searchParams/index";

export default function toSearchParamsString(searchParams: SearchParams): string;
export default function toSearchParamsString(searchParams: FileSearchParams): string;
export default function toSearchParamsString(searchParams: SearchParams | FileSearchParams);
export default function toSearchParamsString(searchParams: SearchParams | FileSearchParams): string {
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