/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * 解析索引html: 画廊上传者
 * 
 * @param td Cheerio  上传者 \<td\> 
 * @return string 上传者id
 */
export default (td: any): string => {
    const uploader = td.find(">div>a").text();
    return uploader;
};