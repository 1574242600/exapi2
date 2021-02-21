import { FileSearchParams } from "../../types";

export default function toFileString(
    similar?: FileSearchParams["similar"],
    covers?: FileSearchParams["covers"],
    exp?: FileSearchParams["exp"]
): string {
    const textArray = [];

    if ( similar === true ) textArray.push("fs_similar=1");
    if ( covers === true ) textArray.push("fs_exp=1");
    if ( exp === true ) textArray.push( "fs_covers=1");

    return textArray.join("&");
}