export const enum EXPaths {
    ROOT = "/",
    API = "/api.php",

    GALLERY_INDEX = ROOT,
    GALLERY_SEARCH = ROOT,
    GALLERY_WATHCED = "/watched",
    GALLERY_VIEWER = "/g/$gallery_id/$gallery_token/",
    GALLERY_SEARCH_FILE_GET_SHA1 = "/upload/image_lookup.php",

    IMG_VIEWER = "/s/$img_token/$index",
    IMG_GET_FULL = "/fullimg.php",
    MULTI_PAGE_VIEWER = "/mpv/$gallery_id/$gallery_token/",
}