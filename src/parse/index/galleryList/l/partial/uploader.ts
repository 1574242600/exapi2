/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * 解析索引html: 画廊上传者
 * 
 * @param $ Cheerio  上传者 \<td\> 
 * @return string 上传者id
 */
export default ($: any): string => {
    const uploader = $.find(">div>a").text();
    return uploader;
};