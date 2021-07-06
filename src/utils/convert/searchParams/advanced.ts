import { SearchParams } from "@types";

export function toEnableString(enableParams: SearchParams["advanced"]["enable"]): string {
    const queryArray = [];

    if (enableParams.name === true) queryArray.push("f_sname=on"); 
    if (enableParams.tags === true) queryArray.push("f_stags=on");
    if (enableParams.desc === true) queryArray.push("f_sdesc=on");
    if (enableParams.torr === true) queryArray.push("f_storr=on"); 
    if (enableParams.dt1 === true) queryArray.push("f_sdt1=on");
    if (enableParams.dt2 === true) queryArray.push("f_sdt2=on");

    return queryArray.join("&");
}

export function toShowString(showParams: SearchParams["advanced"]["show"]): string {
    const queryArray = [];

    if (showParams.torr === true) queryArray.push("f_sto=on");
    if (showParams.delete === true) queryArray.push("f_sh=on");

    return queryArray.join("&");
}

export function toRatingString(rating: SearchParams["advanced"]["rating"]): string {
    return `f_sr=on&f_srdd=${ rating }`;
}

export function toBetweenString(between: SearchParams["advanced"]["between"]): string {
    return `f_sp=on&f_spf=${ between[0] }&f_spt=${ between[1] }`;
}

export function toDisableFilterString(DFParams: SearchParams["advanced"]["disableFilter"]): string {
    const queryArray = [];

    if (DFParams.lang === true) queryArray.push("f_sfl=on");
    if (DFParams.uploader === true) queryArray.push("f_sfu=on");
    if (DFParams.tags === true) queryArray.push("f_sft=on");

    return queryArray.join("&");
}

export default function toAdvancedString(advancedParams: SearchParams["advanced"]): string {
    const advancedArray = ["advsearch=1"];

    if (typeof advancedParams.enable === "object") advancedArray.push(toEnableString(advancedParams.enable));
    if (typeof advancedParams.show === "object") advancedArray.push(toShowString(advancedParams.show));
    if (typeof advancedParams.rating === "number") advancedArray.push(toRatingString(advancedParams.rating));
    if (advancedParams.between instanceof Array) advancedArray.push(toBetweenString(advancedParams.between));
    if (typeof advancedParams.disableFilter === "object") advancedArray.push(toDisableFilterString(advancedParams.disableFilter));

    return advancedArray
        .filter((paramString) =>  paramString !== "")
        .join("&");
}