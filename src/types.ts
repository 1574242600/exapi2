export interface UserCookies {
    ipb_member_id: number,
    ipb_pass_hash: string,
    igneous?: string
}

export interface ImageInfoResponse {
    d: string  //分辨率 和 图片体积   例子: "114 x 514 :: 89.64 KB"
    o: string  //不知道  但通常都是 "org" 
    lf: string //相对路径  访问后重定向到图片链接
    ls: string //相对路径  以图搜图
    ll: string //相对路径  在前面拼接 https://e-hentai.org/r/ （ex会返回404） 就是用于论坛的图片外链（链接会在后端加上token，所以没什么用）
    lo: string //相对路径  普通的图片查看器链接
    xres: string //图片宽度
    yres: string //图片高度
    i: string //图片链接
    s: number //不清楚，但应该是 h@h 客户端id之类的  因为点击重新加载图片会带上这个参数（用途猜测：排除该客户端）
}

export type IndexItemType =
 //   "m" |  //最小化
 //   "p" |  //最小化 + 关注标签
 //   "t" |  //缩略图
    "l" |    //紧凑 + 标签
    "e"     //扩展


export type GalleryType =
    "Doujinshi" |
    "Manga" |
    "Artist CG" |
    "Game CG" |
    "Western" |
    "Non-H" |
    "Image Set" |
    "Cosplay" |
    "Asian Porn" |
    "Misc";

export type GalleryTypeValue =
    2 |
    4 |
    8 |
    16 |
    512 |
    256 |
    32 |
    64 |
    128 |
    1;

export const GalleryTypeMap: Record<GalleryType, GalleryTypeValue> = {
    "Doujinshi": 2,
    "Manga": 4,
    "Artist CG": 8,
    "Game CG": 16,
    "Western": 512,
    "Non-H": 256,
    "Image Set": 32,
    "Cosplay": 64,
    "Asian Porn": 128,
    "Misc": 1
};

export type AdvancedSearchEnableParams =
    "name" | //是否搜索画廊名称
    "tags" | //是否搜索标签
    "desc" | //是否搜索描述
    "torr" | //是否搜索种子文件名
    "dt1" | //是否搜索低权重标签    
    "dt2"; //是否搜索投票移除了的标签  会覆盖dt1

export type AdvancedSearchShowParams =
    "torr" | //是否只显示有种子的图库
    "delete"; //是否显示已删除的库

export type AdvancedSearchDisableFilterParams =
    "lang" |    //是否禁用语言过滤
    "uploader" |    //是否禁用上传者过滤
    "tags";    //是否禁用标签过滤

export type TagNamespace =
    "language" |
    "parody" |
    "character" |
    "group" |
    "artist" |
    "male" |
    "female" |
    "misc" |
    "reclass" |
    "other";

export type Tags = { [T in TagNamespace]?: string[] }

export interface SearchParams {
    type?: GalleryType[] | GalleryTypeValue[] | GalleryTypeValue,
    tags?: Tags,
    text?: string,
    advanced?: {
        enable?: { [T in AdvancedSearchEnableParams]?: boolean };
        show?: { [T in AdvancedSearchShowParams]?: boolean };
        rating?: 2 | 3 | 4 | 5         //最低评分
        between?: [number, number];    //介于 _ 和 _ 页  整数
        disableFilter?: { [T in AdvancedSearchDisableFilterParams]?: boolean };
    }
}

export interface FileSearchParams extends SearchParams {
    hash: string,   //文件sha1
    from?: string,   //文件名称
    similar?: boolean  //是否使用相似性搜索
    covers?: boolean //是否仅搜索封面
    exp?: boolean  //是否显示已删除的库
    advanced?: undefined
}

export interface LGalleryItemInfo {
    id: number,
    token: string,
    tags: Tags,
    type: string,
    title: string,
    cover: string,
    bt: boolean,
    published: number,
    rating: number,
    pages: number,
    uploader: string,
}