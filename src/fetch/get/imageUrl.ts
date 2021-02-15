import { fetchEX } from "../fetch";

/**
 * 获取图片链接  
 * ps: 这是获取图片链接三种方式的其中一种，另外两种分别是： 
 * - 从普通图片查看器html中获取  
 * - 从多页图片查看器api中获取  
 * 
 * 但是我不知道它们的具体区别
 * 
 * @param id number 画廊id
 * @param page number 图片索引
 * @param token string 图片token
 */
export default async (id: string, page: number, token:string): Promise<string> => {
    const response = await fetchEX(`/fullimg.php?gid=${id}&page=${page}&key=${token}`);
    return response.headers.get("Location");
};