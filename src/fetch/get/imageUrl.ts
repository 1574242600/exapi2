import { fetchEX } from "../fetch";

/**
 * 获取原始图片链接  
 * 
 * @param id number 画廊id
 * @param page number 图片索引
 * @param token string 图片token
 */
export default async (id: string, page: number, token:string): Promise<string> => {
    const response = await fetchEX(`/fullimg.php?gid=${id}&page=${page}&key=${token}`, { redirect: "manual" });
    return response.headers.get("Location");
};