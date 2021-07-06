import { FileSearchParams } from "@types";

export default function toFileString(
    from?: FileSearchParams["from"],
    similar?: FileSearchParams["similar"],
    covers?: FileSearchParams["covers"],
    exp?: FileSearchParams["exp"]
): string {
    const textArray = [];

    if ( typeof from === "string" ) textArray.push(`fs_from=${ from }`);
    if ( similar === true ) textArray.push("fs_similar=1");
    if ( exp === true ) textArray.push("fs_exp=1");
    if ( covers === true ) textArray.push( "fs_covers=1");

    return textArray.join("&");
}