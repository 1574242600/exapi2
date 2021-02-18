import { SearchParams } from "../../types";
// https://ehwiki.org/wiki/Gallery_Searching

export default function toTagsString(tags: SearchParams["tags"]): string {
    //%22 -> "  %24 -> $  %2B -> + 
    const toString = (namespace = "", tagArray: string[]) =>
        tagArray.map((tag) => `${namespace}%22${tag}%24%22`)
            .join("+");

    return Object.keys(tags)
        .map((namespace) => {
            const simple = namespace.slice(0, 1);
            const tagArray = tags[namespace].map((tag: string) => tag.replace(/ /, "+"));

            if (namespace === "other") {
                return toString("", tagArray);
            }

            return toString(`${simple}%3A`, tagArray);
        }).join("+");
}