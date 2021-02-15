export interface userCookies {
    ipb_member_id: number,
    ipb_pass_hash: string,
    igneous?: string
}

export interface imageInfoResponse {
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