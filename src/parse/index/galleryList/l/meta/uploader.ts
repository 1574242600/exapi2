/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * 解析L类型画廊条目Html: 获取画廊上传者
 * @name getUploader
 * @param td Cheerio  上传者 \<td\> 
 * @return string 上传者id
 */
export default function getUploader(td: any): string {
    const uploader = td.find(">div>a").text();
    return uploader;
}