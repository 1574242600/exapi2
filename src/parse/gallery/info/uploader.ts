/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * 解析画廊html: 获取上传者昵称
 * @name getUploaderName
 * @param gd3 Cheerio \<div id=\"gd3\"\> 
 * @return string
 */
export default function getUploaderName(gd3: any): string {
    const name = gd3.find("#gdn>a").text();
    
    return name;
}

/*
表站获取上传者 id
function getUploaderId(gd3: any): number {
    const id = gd3.find("#gdn>a")
        .eq(1)
        .attr("href")
        .match(/user=([0-9]+)/)[1];

    return +id;
}
*/